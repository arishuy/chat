import React from 'react'
import "../scss/components/Reminder_input.css";

const Reminder_input = () => {  
  const [isDisplay, setIsDisplay] = React.useState(true);
  const handleClick = () => {
    setIsDisplay(!isDisplay);
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
                // onChange={() => {
                //   setUsername(event.target.value);
                // }}
              />
              <label>Title</label>
            </div>
            <div className="title-box">
              <input
                id="time"
                type="time"
                name=""
                required=""
                // onChange={() => {
                //   setPassword(event.target.value);
                // }}
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") {
                //     handleSubmit(e);
                //   }
                // }}
              />
              <label>Time</label>
            </div>
            <div className="title-box">
              <input
                id="date"
                type="date"
                name=""
                required=""
                // onChange={() => {
                //   setPassword(event.target.value);
                // }}
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") {
                //     handleSubmit(e);
                //   }
                // }}
              />
              <label>Date</label>
            </div>
            <a onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Add
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reminder_input