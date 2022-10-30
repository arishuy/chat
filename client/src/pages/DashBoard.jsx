import React from "react";
import Header from "../components/Header";
import Body from "../components/Body/Body";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import { selectAuth } from "../redux/Slices/AuthSlice";
import Notification from "../components/Notification";

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChatsAsync());
  }, [dispatch]);
  const auth = useSelector(selectAuth);
  const allChats = useSelector((state) => state.chats.chats);
  
  return (
    <div>
      <Header />
      <Body reloadAllChats={allChats} />
    </div>
  );
};

export default DashBoard;
