import React from 'react'
import "../scss/components/Login.css";

const Login = () => {
  return (
    <div>
      <div className="Login">
        <form className="Login_form-inner">
          <input className="Login_field" placeholder="Email Address" />
          <input className="Login_field" placeholder="Password" />
          {/* <a href="#">Forgot password?</a> */}
          <button>Login</button>
        </form>
        <h5>
          Not a member? <a href="">Signup Now</a>
        </h5>
      </div>
    </div>
  );
}

export default Login