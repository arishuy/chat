import React from "react";
import Body_chatwindow from "../components/Body/Body_chatwindow";
import Header from "../components/Header";
import { selectAuth } from "../redux/Slices/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { getAllMessagesAsync } from "../redux/Slices/MessageSlice";
import { useEffect } from "react";

const Message_ChatWindow = () => {
  const allMessagesFromRedux = useSelector((state) => state.message);
  console.log(allMessagesFromRedux);
  const [allMessages, setAllMessages] = React.useState(allMessagesFromRedux);
  console.log(allMessages);
  const auth = useSelector(selectAuth);
  return (
    <div>
      <Header />
      <Body_chatwindow user={auth[0]} reloadMessages={allMessages} />
    </div>
  );
};

export default Message_ChatWindow;
