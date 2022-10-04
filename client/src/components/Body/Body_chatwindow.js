import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"
import io from "socket.io-client";

const Body_chatwindow = ({ user, reloadMessages }) => {
  var socket = io("http://localhost:5000", { transports: ["websocket"] });
  console.log(reloadMessages);
  return (
    <div id="body">
      <Sidebar />
      <Chatwindow user={user} reloadMessages={reloadMessages} socket={socket} />
    </div>
  )
}

export default Body_chatwindow