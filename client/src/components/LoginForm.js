import React from "react";
import "../scss/components/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const login = {
    email: username,
    password: password,
  };
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginAsync(login));
    if (auth[0].status === "success") {
      navigate("/");
    }
  }
  const auth = useSelector((state) => state.auth);
  console.log("login", auth);
  console.log(password);
  console.log(username);
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
