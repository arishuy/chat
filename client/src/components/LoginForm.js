import React from "react";
import "../scss/components/Login.css";

const LoginForm = () => {
  return (
    <div>
      <div className="modal">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input id="username" type="text" name="" required=""/>
                <label>Username</label>
            </div>
            <div className="user-box">
              <input id="password" type="password" name="" required="" />
                <label>Password</label>
            </div>
            <a>
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
