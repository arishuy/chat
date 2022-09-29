import React from 'react'
import Sidebar from '../Sidebar';
import PersonalContent from '../PersonalContent';
import '../../scss/components/Body.css'

const Body_personalpage = () => {
  return (
    <div id="body">
          <Sidebar />
          <PersonalContent/>
    </div>
  );
}

export default Body_personalpage