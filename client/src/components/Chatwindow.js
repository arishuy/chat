import React, { useEffect } from "react";
import Button from "./Button";
import "../scss/components/Chatwindow.css";
import Messcard from "./Card/Messcard";
import { useSelector, useDispatch } from "react-redux";
import { createNewMessageAsync } from "../redux/Slices/MessageSlice";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";
import { getUserByIdAsync } from "../redux/Slices/UserSlice";
import {useState} from 'react';


const Chatwindow = ({ user, reloadMessages, socket }) => {
  const allMessages = [...reloadMessages.messages];
  const dispatch = useDispatch();
  const [chatId, setChatId] = React.useState(allMessages[0].chat);
  console.log(socket);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState(allMessages);
   const [receiverName, setReceiverName] = useState("");
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: user.user._id,
        chat: chatId,
        content: currentMessage,
      };
      await socket.emit("send_message", messageData);
      await socket.emit("inChat", chatId);  
      await socket.emit("getAllChats", messageData);
      setMessageList((list) => [...list, messageData]);
      dispatch(createNewMessageAsync(messageData));
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("nhan");
      setMessageList((list) => [...list, data]);
    });
    return () => socket.off('receive_message');
  }, [socket]);
  
  const messageListComponents = messageList?.map((message) => {
    return (
      <div>
        <Messcard
          classname={
            message.sender === user.user._id
              ? "mess-content-right"
              : "mess-content-left"
          }
          content={message.content}
        />
      </div>
    );
  });
  useEffect(() => { 
    const mes = allMessages?.find(
      (mes) => mes.sender !== user.user._id
    );
    const receiverId = mes?.sender;
    dispatch(getUserByIdAsync(receiverId)).then(res => {
      setReceiverName(res.payload.data.data.user.name);
    })
  },[chatId]);
  return (
    <div className="chat">
      <div className="chat-profile">
        <div className="contact-avatar-chat">
          <img
            className="avatar__image"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <h1 className="chat-h1">{receiverName}</h1>
        <span className="chat-span">Active now</span>
        <div className="button-group">
          <Button title="Profile" />
          <Button title="Change theme" />
          <Button title="Search" />
          <Button title="Block" />
        </div>
      </div>

      <div className="chat-content">
        <ScrollToBottom className="chat-content__message1">
          <div className="chat-content__message">{messageListComponents}</div>
        </ScrollToBottom>
        <div className="chat-content__input">
          <i class="fa-solid fa-chevron-right send"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Type something..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <i class="fa-solid fa-image image"></i>
          <i class="fa-solid fa-file file"></i>
          <i class="fa-solid fa-angles-right like" onClick={sendMessage}></i>
        </div>
      </div>
    </div>
  );
};

export default Chatwindow;
