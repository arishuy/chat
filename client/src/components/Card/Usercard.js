import React from "react";

const Usercard = (props) => {
  return (
    <div className="message-content">
      <div className="contact-avatar kimochi">
        <img
          className="avatar__image"
          src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
        ></img>
      </div>
      <div className="message-text">
        <h1>{props.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
      </div>
    </div>
  );
};

export default Usercard;
