import React from "react";

const Requestcard = (props) => {
  return (
    <div className="request-info">
      <div className="contact-avatar">
        <img
          className="avatar__image"
          src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          alt="avatar"
        ></img>
      </div>
      <span>{props.name}</span>
      <div className="group-button">
        <button className="button v">
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
