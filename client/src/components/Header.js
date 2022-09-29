import React from "react";
import "../scss/components/Header.css";
import Notificationcard from "./Card/Notificationcard.js";
import Notification from "./Notification";

const Header = () => {
  return (
      <div id="header">
        <div className="navigation">
          <div className="text">Chat App</div>
        <h1>Mon, 18/7/2022 7:30 AM </h1>
        <Notification />
          <a className="login" href="#">
            <i className="fa-solid fa-chevron-down"></i>
            <i className="fa-solid fa-user-large"></i>
          </a>
        </div>
    </div>
  );
};

export default Header;
