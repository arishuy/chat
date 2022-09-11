import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const login = {
    email: "uyenhoang4@gmail.com",
    password: "1234567",
  };
  useEffect(() => {
    dispatch1(loginAsync(login));
    dispatch(getAllChatsAsync());
  }, [dispatch,dispatch1]);
  const chat = useSelector((state) => state.chats);
  const auth = useSelector((state) => state.auth);
  console.log(chat);
  console.log("login", auth);
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default DashBoard;
