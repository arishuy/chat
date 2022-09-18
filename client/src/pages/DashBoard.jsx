import React from "react";
import Header from "../components/Header";
import Body from "../components/Body/Body";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice"
import {selectAuth} from "../redux/Slices/AuthSlice"

const DashBoard = () => {
  const auth = useSelector(selectAuth);
  const [allChats, setAllChats] = React.useState([]);
  console.log(auth);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default DashBoard;
