import React from 'react'
import '../scss/components/Notification.css'
import Notificationcard from './Card/Notificationcard'

const Notification = () => {
  const [isDisplay, setIsDisplay] = React.useState(false);
  const handleNotification = () => {
    setIsDisplay(!isDisplay);
    console.log(isDisplay);
  }
  return (
    <div className="notification">
      <div className="notification-bell" onClick={handleNotification}>
        <div class="notification-circle">4</div>
        <i class="fa-solid fa-bell fa-xl"></i>
      </div>
      {isDisplay &&
        <div className="notification-list">
          <Notificationcard />
          <Notificationcard />
          <Notificationcard />
          <Notificationcard />
        </div>
      }
    </div>
  );
}

export default Notification