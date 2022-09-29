import React, { useEffect } from "react";
import "../scss/components/People.css";
import Friendcard from "./Card/Friendcard";
import Requestcard from "./Card/Requestcard";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdAsync } from "../redux/Slices/UserSlice";

const People = () => {
  const [people, setPeople] = React.useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user);
  const userId = user[0].user._id;
  useEffect(() => {
    dispatch(getUserByIdAsync(userId)).then((res) => {
      setPeople(res.payload.data.data.user);
    });
  }, []);
  console.log(people);
  // const friendElements = people.friends.map((friend) => {
  //   return <Friendcard key={friend._id} name={friend.name} />;
  // });

  return (
    <div className="people">
      <div className="search-bounder">
        <div className="search-people">
          <i class="fa-solid fa-users"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Search person..."
          />
        </div>
      </div>
      <div className="main-content">
        <div className="total-friends">
          <h1>Total Friends</h1>
          <div className="friends"></div>
        </div>
        <div className="friend-request">
          <h1>Friend Requests</h1>
          <div className="total-request">
            <Requestcard name="Do Khoi" />
            <Requestcard name="Ngoc Tram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
