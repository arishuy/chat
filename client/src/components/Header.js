import React from "react";
import "../scss/components/Header.css";
import Notification from "./Notification";
import Loginout from "./Loginout";

const Header = () => {
  return (
      <div id="header">
        <div className="navigation">
          <div className="text">Chat App</div>
        <h1>Mon, 18/7/2022 7:30 AM </h1>
        <Notification />
        <Loginout />
        </div>
    </div>
  );
};

export default Header;
