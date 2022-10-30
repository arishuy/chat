import React, { useEffect } from "react";
import "../scss/components/People.css";
import Friendcard from "./Card/Friendcard";
import Requestcard from "./Card/Requestcard";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdAsync } from "../redux/Slices/UserSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FindUserByNameAsync } from "../redux/Slices/UserSlice";

const People = () => {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const [currentInput, setCurrentInput] = React.useState("");
  const user = useSelector((state) => state.auth);
  const people = useSelector((state) => state.user);
  const navigate1 = useNavigate();
  const userId = user[0].user._id;
  useEffect(() => {
    dispatch(getUserByIdAsync(userId)).then((res) => { 
    });
  }, [dispatch]);
  const friendElements = people.friends?.map((friend) => {
    return (
      <Link className="link-friend" to={`/PersonalPage/${friend._id}`}>
        <Friendcard key={friend._id} name={friend.name} />
      </Link>
    );
  });
  const requestElements = people.waitingRequestFriends?.map((request) => {
    return (
        <Requestcard requestId={request._id} name={request.name} />
    );
  });
  function handleSearch() {
    dispatch1(FindUserByNameAsync({ name: currentInput, email: currentInput })).then((res) => { 
      navigate1(`/PersonalPage/${res.payload.data.userId}`);
    });
  }
  return (
    <div className="people">
      <div className="search-bounder">
        <div className="search-people">
          <i class="fa-solid fa-users"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Search person..."
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="total-friends">
          <h1>Total Friends</h1>
          <div className="friends">{friendElements}</div>
        </div>
        <div className="friend-request">
          <h1>Friend Requests</h1>
          <div className="total-request">{requestElements}</div>
        </div>
      </div>
    </div>
  );
};

export default People;
