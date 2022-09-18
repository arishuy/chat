import React from 'react'
import '../../scss/components/Body.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
const Body = ({ reloadAllChats }) => {
  return (
    <div id="body">
      <Sidebar />
      <Content reloadAllChats={reloadAllChats} />
    </div>
  );
};

export default Body