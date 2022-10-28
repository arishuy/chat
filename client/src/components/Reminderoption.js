import React from "react";

const Reminderoption = (props) => {
  return (
    <div className="reminder-option">
      <span>{props.title}</span>
      <i class={props.icon}></i>
    </div>

  );
};

export default Reminderoption;
