import React, { useEffect } from "react";
import "../scss/components/Reminder.css";
import Reminderoption from "./Reminderoption";
import Recocard from "./Card/Recocard";
import Reminder_input from "./Reminder_input";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReminderAsync,
  getAllRemindersAsync,
} from "../redux/Slices/ReminderSlice";

const Reminder = () => {
  const reminders = useSelector((state) => state.reminder.reminders);
  console.log(reminders);
  //const [reminders, setReminders] = React.useState(remindersfromRedux);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [isDisplay1, setIsDisplay1] = React.useState(false);

  useEffect(() => {
    dispatch(getAllRemindersAsync());
  }, [dispatch]);
  const handleClick = () => {
    setIsDisplay(!isDisplay);
  };
  const handleClickD = () => {
    setIsDisplay1(!isDisplay1);
  };
  const handleDelete = (id) => {
    dispatch(deleteReminderAsync(id));
    dispatch2(getAllRemindersAsync());
  };
  const allReminders = reminders?.map((reminder) => {
    const handleClick1 = () => {
      handleDelete(reminder._id);
    };
    return (
      <div style={{ display: "flex" }}>
        <Recocard title={reminder.title} time={reminder.time} />
        <div>
          <a className="button x" onClick={handleClick1} style={{ display : isDisplay1 ? "flex" : "none" }}>
            <i class="fa-solid fa-x"></i>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="reminder col-full">
      <div className="reminder-content1 col-half">
        <h1>Reminder</h1>
        <div className="reminder-1" onClick={handleClick}>
          <Reminderoption title="Add new Reminder" icon="fa-solid fa-plus" />
        </div>
        {/* <Reminderoption title="View all Reminders" icon="fa-solid fa-eye" /> */}
        <div className="reminder-2" onClick={handleClickD}>
        <Reminderoption title="Delete Reminders" icon="fa-solid fa-trash" />
        </div>
        <Reminderoption title="Edit Reminders" icon="fa-solid fa-edit" />
      </div>
      <div className="reminder-content2 col-half">
        <div className="reminder-header">
          <h1 className="title">Title</h1>
          <h1 className="time">Time</h1>
        </div>
        {allReminders}
      </div>
      {isDisplay && <Reminder_input />}
    </div>
  );
};

export default Reminder;
