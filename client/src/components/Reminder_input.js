import React from 'react'
import "../scss/components/Reminder_input.css";
import { createNewReminderAsync } from '../redux/Slices/ReminderSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllRemindersAsync } from '../redux/Slices/ReminderSlice';
const Reminder_input = () => {  
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const [isDisplay, setIsDisplay] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");
  const handleClick = () => {
    setIsDisplay(false);
    const reminderData = {
        title,
        time,
        date,
      };
      console.log(reminderData);
    dispatch(createNewReminderAsync(reminderData));
    dispatch1(getAllRemindersAsync());
    }
  const handleDisplay = () => {
    setIsDisplay(false);
  }
  return (
    <div style={{ display: isDisplay ? "block" : "none" }}>
      <div className="modal" >
        <div className="reminder-box">
          <h2>Reminder</h2>
          <form>
            <div className="title-box">
              <input
                id="title"
                type="text"
                name=""
                required=""
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <label>Title</label>
            </div>
            <div className="title-box">
              <input
                id="time"
                type="time"
                name=""
                required=""
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
              <label>Time</label>
            </div>
            <div className="title-box">
              <input
                id="date"
                type="date"
                name=""
                required=""
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
              <label>Date</label>
            </div>
            <div style={{display: 'flex'}}>
            <a onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Add
            </a>
            <a onClick={handleDisplay}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Close
            </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reminder_input