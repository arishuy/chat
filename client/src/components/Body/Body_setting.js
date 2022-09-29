import React from 'react'
import '../../scss/components/Body.css'
import Sidebar from '../Sidebar'
import Setting from '../Setting'
import Notificationcard from '../Card/Notificationcard'
const Body_setting = () => {
  return (
    <div id="body">
      <Sidebar />
      <Setting />
    </div>
  );
}

export default Body_setting