import React from "react";
import "../scss/components/Header.css";
import Notification from "./Notification";
import Loginout from "./Loginout";
import { useSelector } from "react-redux";

const Header = () => {
  const socket = useSelector((state) => state.socket.socket);
  console.log(socket);
  return (
      <div id="header">
        <div className="navigation">
          <div className="text">Chat App</div>
        <h1>Mon, 18/7/2022 7:30 AM </h1>
        <Notification  socket={socket}/>
        <Loginout />
        </div>
    </div>
  );
};

export default Header;
