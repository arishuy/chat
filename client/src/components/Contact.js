import React, { useEffect } from "react";
import "../scss/components/Contact.css";
import Contactcard from "./Card/Contactcard";
import Photo from "./Card/Photo";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";

const Contact = () => {
  const [chats, setChats] = React.useState([]);
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getAllChatsAsync()).then((res) => {
      setChats(res.payload.data.data.chats);
    });
  }, [dispatch]);
  const chat = useSelector((state) => state.chat);
  const allChats = useSelector((state) => state.chats.chats);
  const allChatsElement = allChats?.map((chat) => {
    return (
      <Contactcard
        chatId={chat._id}
        name={chat.chatName}
        latestMessage={chat.latestMessage?.content}
      />
    );
  });
  
  return (
    <div className="contact-body">
      <div className="contact-content">
        <div className="contact-regular">
          <h1>Regular Contact</h1>
          <div className="contact-avatar">
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
          </div>
        </div>
        <div className="search">
          <div className="search-content">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Enter a name"></input>
          </div>
        </div>
      </div>
      <div className="contact-message">
        {allChatsElement}
      </div>
    </div>
  );
};

export default Contact;
