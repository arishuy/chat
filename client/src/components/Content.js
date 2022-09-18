import React from "react";
import "../scss/components/Content.css";
import Usercard from "./Card/Usercard";
import Remindercard from "./Card/Remindercard";
const Content = () => {
  return (
    <div className="content col-full">
      <div className="message col-half">
        <h1>Message</h1>
        <Usercard name="Huy Bui" />
        <Usercard name="Uyen Hoang" />
        <Usercard name="Hung Nguyen" />
      </div>
      <div className="reminder1 col-half">
        <div className="header-remind">Reminder</div>
        <div className="reminder1-content">
          <Remindercard name="Watch movie" time="21/7/2022" />
          <Remindercard name="Go to hotel" time="22/7/2022" />
          <Remindercard name="Go to library" time="23/7/2022" />
        </div>
      </div>
    </div>
  );
};

export default Content;
