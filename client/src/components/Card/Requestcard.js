import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriendAsync, getUserByIdAsync } from "../../redux/Slices/UserSlice";
import { Link } from "react-router-dom";
const Requestcard = ({ requestId, name }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const userId = user[0].user._id;
  const [isAccept, setIsAccept] = React.useState(true);
  function handleAccept() {
    dispatch(acceptFriendAsync({
      id: requestId,
    })).then((res) => {
      dispatch(getUserByIdAsync(userId));
    });
  }
  
  return (
    <div className="request-info">
      <Link className="link-request" to={`/PersonalPage/${requestId}`}>
        <div className="contact-avatar">
          <img
            className="avatar__image"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            alt="avatar"
          ></img>
        </div>
      </Link>
      <span>{name}</span>
      <div className="group-button">
        <button className="button v" onClick={handleAccept}>
          <i class="fa-solid fa-check"></i>
        </button>
        <button className="button x">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default Requestcard;
