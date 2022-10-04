import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"
import io from "socket.io-client"
import { useState, useEffect } from 'react'


const host = "http://localhost:5000";
const socket = io({  
  cors: {
  origin: "http://localhost:5000",
  credentials: true
},transports : ['websocket'] });
const Body_chatwindow = ({ user, reloadMessages }) => {
  return (
    <div className="body">
      <Sidebar />
      <Chatwindow user={user} reloadMessages={reloadMessages} socket={socket} />
    </div>
  )
}

export default Body_chatwindow