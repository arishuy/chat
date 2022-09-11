import React from 'react'
import '../../scss/components/Body.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
const Body = () => {
  return (
    <div>
        <div id="body">
            <Sidebar />
            <Content />
            </div>
    </div>
  )
}

export default Body