import React from 'react'
import Header from '../components/Header'
import Body_contact from '../components/Body/Body_contact'
import { useSelector } from 'react-redux'


const Message_Contact = () => {
  const userInfo = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div>
      <Header />
      <Body_contact />
    </div>
  )
}

export default Message_Contact