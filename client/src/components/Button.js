import React from 'react'
import {useNavigate} from 'react-router'

const Button = (props) => {
  const navigate = useNavigate();
   function handleClick() {
      navigate("/PersonalPage/6332e98c060472cef92f31cc");
    }
  return (
    <div className="button-chat" onClick={handleClick}>{props.title}</div>
  )
}

export default Button