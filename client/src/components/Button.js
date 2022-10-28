import React from "react";
import { useNavigate } from "react-router";

const Button = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/PersonalPage/" + props.id);
  }
  return (
    <div className="button-chat" onClick={handleClick}>
      {props.title}
    </div>
  );
};

export default Button;
