import React from 'react'
import '../../scss/components/Notificationcard.css'

const Notificationcard = ({name, date, content}) => {
  return (
    <div className="notificationcard-container">
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