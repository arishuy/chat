import React from "react";

const Messcard = (props) => {
  return <div className={props.classname}>
    <p className="message-content-p">
    {props.content}
    </p>
  </div>;
};

export default Messcard;
