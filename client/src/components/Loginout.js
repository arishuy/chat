import React from "react";
const Loginout = () => {
  const [isDisplay, setIsDisplay] = React.useState(false);
  const handleUser = () => {
    setIsDisplay(!isDisplay);
    };

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
                <button className="btn btn-primary">My Account</button>
            </div>
            <div className="logout">
                <button className="btn btn-primary" >Logout</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Loginout;
