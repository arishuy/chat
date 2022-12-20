import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../scss/components/Notification.css'
import Notificationcard from './Card/Notificationcard'
import { useDispatch } from 'react-redux'
import { getAllNotificationsAsync } from '../redux/Slices/NotificationSlice'
import { Link } from "react-router-dom";


const Notification = ({ socket }) => {
  const [isDisplay, setIsDisplay] = React.useState(false);
  const dispatch = useDispatch();
  const [notifications, setNotifications] = React.useState([]);
  const handleNotification = () => {
    setIsDisplay(!isDisplay);
  };
  useEffect(() => {
    console.log("useEffect1");
    dispatch(getAllNotificationsAsync()).then((res) => {
      const allNotifsfromAPI = res.payload.data.data.notifications;
      let allNotifs = [];
      allNotifsfromAPI.forEach((element) => {
        allNotifs.push({
          sender: element.sender.name,
          senderId: element.sender._id,
          receivers: element.receivers,
          content: element.content,
          isMessage: element.isMessage,
          receiverChat: element.receiverChat,
          Seen: element.Seen,
        });
      });
      console.log(allNotifs);
      setNotifications(allNotifs);
    });
  }, [1]);
  useEffect(() => {
    console.log("use effect");
     let tempNotifs = [...notifications];
    socket.on("receive_notification", (data) => {
      console.log(data.senderId);
      const index = tempNotifs.findIndex((notif) => notif.senderId === data.senderId);
      console.log(index); 
      console.log(tempNotifs);
      if (index >= 0) {
        tempNotifs[index].content = data.content;
        setNotifications(tempNotifs);
      } else {
         setNotifications((prev) => [data, ...prev]);
      }
    });
    
  }, [socket, notifications]);
  console.log(notifications);
  const listNotifications = notifications?.map((notification) => {
    return (
      <Link to={`/Message_ChatWindow/${notification.receiverChat}`} style={{ textDecoration: 'none', color: 'black' }}>
      <Notificationcard name={notification.sender} date={"2021-06-01"} content={notification.content} chatId={notification.receiverChat}
        />
      </Link>
    );
  });
  return (
    <div className="notification">
      <div className="notification-bell" onClick={handleNotification}>
        <div class="notification-circle">4</div>
        <i class="fa-solid fa-bell fa-xl"></i>
      </div>
      {isDisplay &&
        <div className="notification-list">
            {listNotifications}
        </div>
      }
    </div>
  );
}
export default Notification;