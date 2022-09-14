import React from "react";
import Header from "../components/Header";
import Body from "../components/Body/Body";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default DashBoard;
