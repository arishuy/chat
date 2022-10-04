import React from "react";
import { useNavigate } from "react-router";

const Friendcard = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    // navigate("/PersonalPage/6332e98c060472cef92f31cc");
  }
  return (
    <div className="friend-info" onClick={handleClick}>
      <div className="contact-avatar">
        <img
          className="avatar__image"
          src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          alt="avatar"
        ></img>
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default Friendcard;
