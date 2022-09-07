import React from "react";
import '../scss/components/Reminder.css'

const Reminder = () => {
  return (
    <div className="reminder col-full">
      <div className="reminder-content1 col-half">
        <h1>Reminder</h1>
        <div className="reminder-option">
          <span>Add new Reminder</span>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="reminder-option">
          <span>Edit Reminder</span>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="reminder-option">
          <span>Delete Reminder</span>
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
      <div className="reminder-content2 col-half">
        <div className="reminder-header">
        <h1 className="title">Title</h1>
        <h1 className="time">Time</h1>
        </div>
        <div className="reminder-content3">
          <span>Meet Uyen Hoang</span>
          <h5>10:00 AM</h5>
        </div>
        <div className="reminder-content3">
          <span>Meet Uyen Hoang</span>
          <h5>10:00 AM</h5>
        </div>
        <div className="reminder-content3">
          <span>Meet Uyen Hoang</span>
          <h5>10:00 AM</h5>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
