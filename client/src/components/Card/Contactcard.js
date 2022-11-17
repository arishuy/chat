import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesAsync } from "../../redux/Slices/MessageSlice";
import { useNavigate } from "react-router"

const Contactcard = ({chatId,name,latestMessage,time}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(getAllMessagesAsync(chatId)).then((res) => { 
      navigate("/Message_ChatWindow/" + chatId);
    });
  };
  return (
    <div className="message-content" onClick={handleClick}>
      <div className="contact-avatar kimochi">
        <img
          className="avatar__image"
          src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          alt="avatar"
        ></img>
      </div>
      <div className="message-text">
        <h1>{name}</h1>
        <p>
          {latestMessage}
        </p>
      </div>
      <h3>{time}</h3>
    </div>
  );
};

export default Contactcard;
