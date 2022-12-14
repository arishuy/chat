import React, { useEffect } from "react";
import Button from "./Button";
import "../scss/components/Chatwindow.css";
import Messcard from "./Card/Messcard";
import { useSelector, useDispatch } from "react-redux";
import { createNewMessageAsync } from "../redux/Slices/MessageSlice";
import ScrollToBottom from "react-scroll-to-bottom";
import { getUserByIdAsync } from "../redux/Slices/UserSlice";
import {useState} from 'react';
import { createNewNotificationAsync } from "../redux/Slices/NotificationSlice";
import { useParams } from "react-router";
import Contact from "./Contact";
import { addLatestMessage } from "../redux/Slices/ChatSlice";
import { timeSince } from "../../src/utils/changeDate";

const Chatwindow = ({ user, reloadMessages, socket }) => {
  //const allMessages = [...reloadMessages.messages];
  const allMessages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();
  const chatId = useParams().id;
  const [newNotification, setNewNotification] = React.useState({});
  const [receiverId, setReceiverId] = React.useState("");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState(allMessages);
  const [receiverName, setReceiverName] = useState("");
  const dispatch1 = useDispatch();
   useEffect(() => {
     setMessageList(allMessages);
   }, [chatId,dispatch]);
   useEffect(() => {
    socket.emit("inChat", chatId);
   },[chatId])
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: user.user._id,
        chat: chatId,
        content: currentMessage,
        createdAt: new Date().now,
      };
      await socket.emit("inChat", chatId);
      await socket.emit("send_message", messageData);
      
      await socket.emit("getAllChats", messageData);
      dispatch1(
        addLatestMessage({
          id: chatId,
          latestMessage: "you: " + currentMessage,
          createdAt: new Date().now,
        })
      );
      setMessageList((list) => [...list, messageData]);
      dispatch(createNewMessageAsync(messageData));
      await socket.emit("send_notification",
        {
          sender: user.user.name,
          senderId: user.user._id,
          receivers: receiverId,
          content: `has sent you: ${currentMessage}`,
          isMessage: true,
          receiverChat: chatId,
          Seen: false,
        });
       const notifData = {
         sender: user.user._id,
         content: `has sent you: ${currentMessage}`,
         isMessage: true,
         receivers: receiverId,
         receiverChat: chatId,
       };
      dispatch(
        createNewNotificationAsync(notifData)
      ).then((res) => {
        console.log("add notification");
       });
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
       dispatch1(
         addLatestMessage({
           id: chatId,
           latestMessage: data.sender == user.user._id ? "you: " + data.content : data.content,
           createdAt: data.createdAt,
         })
       );
    });
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
          time={new Date(message.createdAt).toLocaleTimeString()}
        />
      </div>
    );
  });
  useEffect(() => {
    const mes = allMessages?.find(
      (mes) => mes.sender !== user.user._id
    );
    console.log(mes);
    const receiverId = mes?.sender;
    setReceiverId(receiverId);
    dispatch(getUserByIdAsync(receiverId)).then(res => {
      setReceiverName(res.payload.data.data.user.name);
    })
  },[chatId]);
  console.log(receiverId);
  console.log(socket);

  return (
    <div className="chat">
      <div className="chat-contact-container">
        <Contact />
      </div>
      <div className="chat-content">
        <div className="chat-content__header">
          <img
            className="contact-avatar"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
          <h1 className="chat-h1">{receiverName}</h1>
        </div>
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
      {/* <div className="chat-profile">
        <div className="contact-avatar-chat">
          <img
            className="avatar__image"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <h1 className="chat-h1">{receiverName}</h1>
        <span className="chat-span">Active now</span>
        <div className="button-group">
          <Button title="Profile" id={receiverId} />
          <Button title="Change theme" />
          <Button title="Search" />
          <Button title="Block" />
        </div>
      </div> */}
    </div>
  );
};

export default Chatwindow;
