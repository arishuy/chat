import React from "react";

const Remindercard = (props) => {
  return (
    <div className="message">
      <div className="reminder1-item">
        <i className="fa-solid fa-calendar-alt"></i>
        <h1>{props.name}</h1>
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default Remindercard;
