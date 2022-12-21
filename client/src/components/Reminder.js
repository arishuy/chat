import React, { useEffect } from "react";
import "../scss/components/Reminder.css";
import Reminderoption from "./Reminderoption";
import Recocard from "./Card/Recocard";
import Reminder_input from "./Reminder_input";
import { useDispatch } from "react-redux";
import { getAllRemindersAsync } from "../redux/Slices/ReminderSlice";

const Reminder = () => {
  const [reminders, setReminders] = React.useState([]);
  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = React.useState(false);
  const handleClick = () => {
    setIsDisplay(!isDisplay);
  };
  useEffect(() => { 
      dispatch(getAllRemindersAsync()).then((data) => {
      setReminders(data.payload.data.reminders);
      console.log(data.payload.data.reminders);
    })}, [dispatch]);

    const allReminders = reminders?.map((reminder) => {
      return (
        <Recocard title={reminder.title} time={reminder.time} />
      );
    });
  return (
    <div className="reminder col-full">
      <div className="reminder-content1 col-half">
        <h1>Reminder</h1>
        <div className="reminder-1" onClick={handleClick}>
        <Reminderoption title="Add new Reminder" icon="fa-solid fa-plus" />
        </div>
        <Reminderoption title="View all Reminders" icon="fa-solid fa-eye" />
        <Reminderoption title="Delete Reminders" icon="fa-solid fa-trash" />
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
