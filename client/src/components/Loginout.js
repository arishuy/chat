import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutAccount} from "../redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Loginout = () => {
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisplay, setIsDisplay] = React.useState(false);
  const userid = useSelector((state) => state.auth[0].user._id);
  const handleUser = () => {
    setIsDisplay(!isDisplay);
    };
  const handleClick = () => {
    dispatch(logoutAccount());
    socket.disconnect();
    navigate("/login");
  };
  const handleAccount = () =>{
    navigate("/PersonalPage/" + userid);
  }
    return (
      <div>
        <div className="loginout" >
          <a className="login" onClick={handleUser}>
            <i className="fa-solid fa-chevron-down"></i>
            <i className="fa-solid fa-user-large"></i>
          </a>
        </div>
        {isDisplay && (
          <div className="sub-navigation">
            <div className="my-account">
                <button className="btn btn-primary" onClick={handleAccount}>My Account</button>
            </div>
            <div className="logout">
                <button className="btn btn-primary" onClick={handleClick}>Logout</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Loginout;
