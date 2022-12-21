import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"
import { useSelector } from 'react-redux'
import Contact from "../Contact";

const Body_chatwindow = ({ user, reloadMessages }) => {
  const socket = useSelector((state) => state.socket.socket);
  console.log(socket);
  return (
    <div id="body">
      <Sidebar />
      <Chatwindow user={user} reloadMessages={reloadMessages} socket={socket} />
    </div>
  )
}

export default Body_chatwindow