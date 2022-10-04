import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { addNewFriendAsync } from '../redux/Slices/UserSlice';
import "../scss/components/PersonalContent.css";
import { getUserByIdAsync } from '../redux/Slices/UserSlice';
const PersonalContent = () => {
  const params = useParams();
  const [personId, setPersonId] = React.useState(params.id);
  const [person, setPerson] = React.useState({});
  const dispatch = useDispatch();
  const handleAddingFriend = () => {
    dispatch(addNewFriendAsync({
      id: personId
    })).then((res) => { 
      alert("Add friend successfully");
    });
  }

   useEffect(() => {
     dispatch(getUserByIdAsync(personId)).then((res) => {
       setPerson(res.payload.data.data.user);
     });
   }, [dispatch]);
    const personName = person.name;
    return (
      <div className="personal-container">
        <div className="personal-content">
          <div className="personal-content-header-cover">
            <img className="cover-img" src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"></img>
          </div>
          <div className="personal-content-header-avatar">
            <img
              className="avatar__image"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
          <div className="personal-content-header-info">
            <div className="personal-content-header-info-name">
              <h3>{personName}</h3>
            </div>
          </div>
          <div className="personal-content-header-button">
            <button className="addfriend-btn btn" onClick={handleAddingFriend}>Add Friend</button>
            <button className="block-btn btn" onClick={handleAddingFriend}>Block</button>
          </div>
        </div>
      </div>
    )
  }
  export default PersonalContent;