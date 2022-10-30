import React from "react";
import "../scss/components/Content.css";
import Remindercard from "./Card/Remindercard";
import Topcard from "./Card/Topcard";
const Content = () => {
  return (
    <div className="content col-full">
      <div className="rank col-half">
        <h1>
          Ranking  <i class="fa-solid fa-ranking-star"></i></h1>
        <div className="rank__content">
        <Topcard name="Huy Bui" amount="200"/>
        </div>
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
