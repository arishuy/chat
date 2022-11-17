import React from 'react'
import '../../scss/components/Notificationcard.css'
import { useDispatch } from 'react-redux'
import { getAllMessagesAsync } from "../../redux/Slices/MessageSlice";
import {useNavigate} from 'react-router'

const Notificationcard = ({ name, date, content, chatId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const handleClick = async () => {
     dispatch(getAllMessagesAsync(chatId)).then((res) => {
       navigate("/Message_ChatWindow/" + chatId);
     });
   };
  return (
    <div className="notificationcard-container" onClick={handleClick}>
      <img
        className="notificationcard-avatar__image"
        src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
        alt="avatar"
      ></img>
      <div className="notificationcard-content">
        <div className="notificationcard-content-nametime">
          <div className="notificationcard-content-name">{name}</div>
          <div className="notificationcard-content-time">{date}</div>
        </div>
        <div className="notificationcard-content-notifcontent">{content}</div>
      </div>
    </div>
  );
}

export default Notificationcard