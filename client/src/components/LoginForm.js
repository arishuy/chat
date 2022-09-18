import React, { useRef, useState } from "react";
import "../scss/components/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/AuthContent";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
const LoginForm = () => {

  const auth_context = useContext(AuthContext);

  let navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const dispatchAllchats = useDispatch();
  const auth = useSelector((state) => state.auth);
  const login = {
    email: username,
    password: password,
  };
  console.log(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(login)).then(auth => {
      if (auth.payload.status === "success") {
        dispatchAllchats(getAllChatsAsync()).then(() => { 
          navigate("/dashboard");
        });
        auth_context.login( auth.payload.token);
        // console.log(auth.payload.data.user._id);
      }
    });
  }; 

  // console.log("login", auth);
  // console.log(password);
  // console.log(username);
  return (
    <div>
      <div className="modal">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                id="username"
                type="text"
                name=""
                required=""
                onChange={() => {
                  setUsername(event.target.value);
                }}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                id="password"
                type="password"
                name=""
                required=""
                onChange={() => {
                  setPassword(event.target.value);
                }}
              />
              <label>Password</label>
            </div>
            <a onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;