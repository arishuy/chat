import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"

const Body_chatwindow = () => {
  return (
    <div id="body">
        <Sidebar />
        <Chatwindow />
    </div>
  )
}

export default Body_chatwindow