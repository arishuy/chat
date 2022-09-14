import React from 'react'
import '../../scss/components/Body.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
const Body = () => {
  return (
        <div id="body">
            <Sidebar />
            <Content />
            </div>
  )
}

export default Body