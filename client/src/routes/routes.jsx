import React from "react";
import { Route, Routes } from "react-router-dom";

import DashBoard from "../pages/DashBoard";
import Message_ChatWindow from "../pages/Message_ChatWindow";
import Message_Contact from "../pages/Message_Contact";
import People from "../pages/People";
import Reminder from "../pages/Reminder";
import Setting from "../pages/Setting";
import Login from "../pages/Login";
import Empty from "../pages/Empty";
import PersonalPage from "../pages/PersonalPage";

function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Empty/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/Message_ChatWindow/:id" element={<Message_ChatWindow />} />
      <Route path="/Message_Contact" element={<Message_Contact />} />
      <Route path="/People" element={<People />} />
      <Route path="/PersonalPage/:id" element={<PersonalPage/>} />
      <Route path="/Reminder" element={<Reminder />} />
      <Route path="/Setting" element={<Setting />} />
    </Routes>
  );
}

export default routes;
