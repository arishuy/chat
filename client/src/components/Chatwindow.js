import React, { useEffect } from "react";
import Button from "./Button";
import "../scss/components/Chatwindow.css";
import Messcard from "./Card/Messcard";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../redux/Slices/AuthSlice";
import { getCurrentState } from "../redux/Slices/AuthSlice";
import { createNewMessageAsync } from "../redux/Slices/MessageSlice";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

const Chatwindow = ({ user, reloadMessages, socket }) => {
  const allMessages = [...reloadMessages.messages];
  console.log("1");
  const dispatch = useDispatch();
  const [chatId, setChatId] = React.useState("6318d5cf0ac6538490d5d471");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState(allMessages);
  console.log(messageList);
  console.log(chatId);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: user.user._id,
        chat: chatId,
        content: currentMessage,
      };
      console.log(messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      await dispatch(createNewMessageAsync(messageData));
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    console.log("useEffect");
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  console.log(messageList);
  const messageListComponents = messageList.map((message) => {
    return (
      <div>
        <Messcard content={message.content} />
        </div>
    )
  });
  return (
    <div className="chat">
      <div className="chat-profile">
        <div className="contact-avatar-chat">
          <img
            className="avatar__image"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <h1 className="chat-h1">Huy Bui</h1>
        <span className="chat-span">Active now</span>
        <div className="button-group">
          <Button title="Profile" />
          <Button title="Change theme" />
          <Button title="Search" />
          <Button title="Block" />
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-content__message">
          {messageListComponents}
        </div>
        <div className="chat-content__input">
          <i class="fa-solid fa-chevron-right send"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Type something..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <i class="fa-solid fa-image image"></i>
          <i class="fa-solid fa-file file"></i>
          <i class="fa-solid fa-thumbs-up like" onClick={sendMessage}></i>
        </div>
      </div>
    </div>
  );
};

export default Chatwindow;
