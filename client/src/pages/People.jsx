import React from 'react'
import Header from '../components/Header'
import Body_people from '../components/Body/Body_people'
import { selectAuth } from '../redux/Slices/AuthSlice'
import { useSelector } from 'react-redux'

const People = () => {
   const auth = useSelector(selectAuth);
  return (
    <div>
      <Header />
      <Body_people />
    </div>
  )
}

export default People