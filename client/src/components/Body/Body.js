import React from 'react'
import '../../scss/components/Body.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
import { useSelector } from 'react-redux'
const Body = () => {
  const socket = useSelector((state) => state.socket.socket);
  console.log(socket);
  return (
    <div id="body">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Body