import React from 'react'

const Recocard = (props) => {
  return (
    <div className="reminder-content3">
          <span>{props.title}</span>
          <h5>{props.time}</h5>
        </div>
  )
}

export default Recocard