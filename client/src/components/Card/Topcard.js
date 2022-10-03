import React from "react";
import "../../scss/components/Topcard.css";
const Topcard = () => {
  return (
    <div className="top-content">
      <div>
        <div className="top-person st1">
          <div className="top-avatar">
            <img
              className="top-person-img"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
          <div className="top-person-name">
            Huy
            <p className="top-person-message">200</p>
          </div>
        <div className="block-card1">
        </div>
        </div>
      </div>
      <div className="top-person st2">
        <div className="top-avatar">
          <img
            className="top-person-img"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <div className="top-person-name">
          Huy
          <p className="top-person-message">200</p>
        </div>
        <div className="block-card2">
        </div>
      </div>
      <div className="top-person st3">
        <div className="top-avatar">
          <img
            className="top-person-img"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <div className="top-person-name">
          Huy
          <p className="top-person-message">200</p>
        </div>
        <div className="block-card3">
        </div>
      </div>
    </div>
  );
};

export default Topcard;
