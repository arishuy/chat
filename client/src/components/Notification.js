import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../scss/components/Notification.css'
import Notificationcard from './Card/Notificationcard'
import { useDispatch } from 'react-redux'
import { getAllNotificationsAsync } from '../redux/Slices/NotificationSlice'

const Notification = ({ socket }) => {
  // const socket = useSelector(state => state.socket.socket);
  console.log(socket);
  const [isDisplay, setIsDisplay] = React.useState(false);
  const dispatch = useDispatch();
  const [notifications, setNotifications] = React.useState([]);
  const handleNotification = () => {
    setIsDisplay(!isDisplay);
  };
  useEffect(() => {
    dispatch(getAllNotificationsAsync()).then((res) => {
      const allNotifsfromAPI = res.payload.data.data.notifications;
      let allNotifs = [];
      allNotifsfromAPI.forEach((element) => {
        allNotifs.push({
          sender: element.sender.name,
          senderId: element.sender._id,
          receivers: element.receivers,
          content: element.content,
          receiverChat: element.receiverChat,
          isMessage: element.isMessage,
          Seen: element.Seen,
        });
      });
      console.log(allNotifs);
      setNotifications(allNotifs);
    });
   }, [1]);
  useEffect(() => {
    socket.on("receive_notification", (data) => {
      const index = notifications.findIndex((notif) => notif.senderId == data.senderId);
      if (notif) {
        notifications[index].content = data.content;
      } else {
         setNotifications((prev) => [data, ...prev]);
      }
    });
  }, [socket]);
  console.log(notifications);
  const listNotifications = notifications?.map((notification) => {
    return (
      <Notificationcard name={notification.sender} date={"2021-06-01"} content={notification.content}
      />
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