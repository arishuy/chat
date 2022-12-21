import React from "react";

const Messcard = (props) => {
  return (
      <div className={props.classname}>
        <p className="message-content-p">{props.content}</p>
        <h5>{props.time}</h5>
      </div>
  );
};

export default Messcard;
