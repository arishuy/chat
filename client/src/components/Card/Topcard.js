import React from "react";
import "../../scss/components/Topcard.css";
import { useNavigate } from 'react-router';

const Topcard = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/PersonalPage/6332e98c060472cef92f31cc");
  }
  return (
    <div className="top-content">
      <div>
        <div className="top-person st1">
          <div className="top-avatar" onClick={handleClick}>
            <img
              className="top-person-img"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
          <div className="top-person-name">
            {props.name}
            <p className="top-person-message">{props.amount}</p>
          </div>
        <div className="block-card1">
        </div>
        </div>
      </div>
      <div className="top-person st2">
        <div className="top-avatar" onClick={handleClick}>
          <img
            className="top-person-img"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <div className="top-person-name">
        {props.name}
          <p className="top-person-message">{props.amount}</p>
        </div>
        <div className="block-card2">
        </div>
      </div>
      <div className="top-person st3">
        <div className="top-avatar" onClick={handleClick}>
          <img
            className="top-person-img"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <div className="top-person-name">
        {props.name}
          <p className="top-person-message">{props.amount}</p>
        </div>
        <div className="block-card3">
        </div>
      </div>
    </div>
  );
};

export default Topcard;
