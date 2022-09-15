import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"
import io from "socket.io-client";

const Body_chatwindow = () => {
   var socket = io("http://localhost:5000", { transports: ["websocket"] });
  return (
    <div id="body">
      <Sidebar />
        <Chatwindow socket={socket} />
    </div>
  )
}

export default Body_chatwindow