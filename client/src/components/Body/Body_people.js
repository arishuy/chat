import React from 'react'
import Sidebar from '../Sidebar'
import People from '../People'
import '../../scss/components/Body.css'
const Body_people = () => {
  return (
    <div id="body">
        <Sidebar />
        <People />
    </div>
  )
}

export default Body_people