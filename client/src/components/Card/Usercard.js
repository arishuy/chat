
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesAsync } from "../../redux/Slices/MessageSlice";
import { useNavigate } from "react-router";
import { selectAuth } from "../../redux/Slices/AuthSlice";
import { Link } from "react-router-dom";


const Usercard = ({chatId,name,latestMessage}) => {
  var socket = io("http://localhost:5000", { transports: ["websocket"] });
  let navigate = useNavigate();
  const [allMessages, setAllMessages] = React.useState([]);
  console.log(allMessages);
  const dispatch = useDispatch();
  const [messageList, setMessageList] = React.useState([]);
  console.log(messageList);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const allMessagesData = useSelector((state) => state.message);
  console.log(allMessagesData);
  const handleClick = async () => {
    console.log("clicked");
    dispatch(getAllMessagesAsync(chatId)).then((res) => { 
      dispatch(get)
      navigate("/Message_ChatWindow");
    });
    //socket.emit("reloadAllMessages", (allMessagesData, chatId));
  };
  // useEffect(() => {
  //   console.log("useEffect");
  //   socket.on("reloadAllMessages", (data) => {
  //     setMessageList(data);
  //   });
  // }, [dispatch]);
  return (
    <div className="message-content" onClick={handleClick}>
      <div className="contact-avatar kimochi">
        <img
          className="avatar__image"
          src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
        ></img>
      </div>
      <div className="message-text">
        <h1>{name}</h1>
        <p className="message-text__p">
          {latestMessage}
        </p>
      </div>
    </div>
  );
};;

export default Usercard;
