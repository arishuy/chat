import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../scss/components/Notification.css'
import Notificationcard from './Card/Notificationcard'
import { useDispatch } from 'react-redux'
import { getAllNotificationsAsync } from '../redux/Slices/NotificationSlice'

const Notification = () => {
  const socket = useSelector(state => state.socket.socket);
  console.log(socket);
  const [isDisplay, setIsDisplay] = React.useState(false);
  const dispatch = useDispatch();
  // const notificationFromRedux = useSelector(state => state.notifications.notifications);
  // console.log(notificationFromRedux);
  const [notifications, setNotifications] = React.useState({});
  const handleNotification = () => {
    setIsDisplay(!isDisplay);
  }
  useEffect(() => { 
    console.log("useEffect");
    socket.on("receive_notification", (data) => {
      console.log("receive_notification");
      console.log(data);
      setNotifications([...notifications, data]);
      console.log(notifications);
    }, [socket]);
  },[socket]);
  console.log(notifications);
  // const notificationList = notifications?.map((notification) => {
  //   return (
  //     <div>
  //     </div>
  //   )
  // });
  return (
    <div className="notification">
      <div className="notification-bell" onClick={handleNotification}>
        <div class="notification-circle">4</div>
        <i class="fa-solid fa-bell fa-xl"></i>
      </div>
      {isDisplay &&
        <div className="notification-list">
          {notificationList}
        </div>
      }
    </div>
  );
}

export default Notification