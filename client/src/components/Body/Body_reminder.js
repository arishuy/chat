import Sidebar from '../Sidebar'
import Reminder from '../Reminder'
import '../../scss/components/Body.css'
import React from 'react'
const Body_reminder = () => {
  return (
    <div id="body">
        <Sidebar />
        <Reminder />
    </div>
  )
}

export default Body_reminder