import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { addNewFriendAsync } from '../redux/Slices/UserSlice';
import { useSelector } from 'react-redux';
import io from "socket.io-client";
const PersonalContent = () => {
  var socket = io("http://localhost:5000", { transports: ["websocket"] });
  const params = useParams();
  const [personId, setPersonId] = React.useState(params.id);
  const dispatch = useDispatch();
  const handleAddingFriend = () => { 
    dispatch(addNewFriendAsync({
      id: personId
    }));
  }
  return (
      <div>
          <button onClick={handleAddingFriend}>Add Friend</button>
    </div>
  )
}

export default PersonalContent