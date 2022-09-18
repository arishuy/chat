import React from "react";
import "../scss/components/Content.css";
import Usercard from "./Card/Usercard";
import Remindercard from "./Card/Remindercard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
const Content = () => {
  const allChats = useSelector((state) => state.chats.chats);
  console.log(allChats);
  const allChatsElements = allChats.map((chat) => {
    return <Usercard chatId={chat._id} name={chat.chatName} latestMessage={chat.latestMessage.content} />
  });
  return (
    <div className="content col-full">
      <div className="message col-half">
        <h1>Message</h1>
        {allChatsElements}
      </div>
      <div className="reminder1 col-half">
        <div className="header-remind">Reminder</div>
        <div className="reminder1-content">
          <Remindercard name="Watch movie" time="21/7/2022" />
          <Remindercard name="Go to hotel" time="22/7/2022" />
          <Remindercard name="Go to library" time="23/7/2022" />
        </div>
      </div>
    </div>
  );
};

export default Content;
