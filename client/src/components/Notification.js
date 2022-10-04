import React, { useEffect } from 'react'
import '../scss/components/Notification.css'
import Notificationcard from './Card/Notificationcard'

const Notification = () => {
   var socket = io("http://localhost:5000", { transports: ["websocket"] });
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const handleNotification = () => {
    setIsDisplay(!isDisplay);
  }
  useEffect(() => { 
    socket.on("receive_notification", (data) => {
      setNotifications([...notifications, data]);
      console.log(notifications);
    });
  });
  console.log(notifications);
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