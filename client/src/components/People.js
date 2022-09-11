import React from "react";
import "../scss/components/People.css";
import Friendcard from "./Card/Friendcard";
import Requestcard from "./Card/Requestcard";
const People = () => {
  return (
    <div className="people">
      <div className="search-bounder">
        <div className="search-people">
          <i class="fa-solid fa-users"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Search person..."
          />
        </div>
      </div>
      <div className="main-content">
        <div className="total-friends">
          <h1>Total Friends</h1>
          <div className="friends">
            <Friendcard name="Huy Bui" />
            <Friendcard name="Uyen Hoang" />
            <Friendcard name="Do Khoi" />
            <Friendcard name="Thao Quyen" />
            <Friendcard name="Vinh Nhan" />
            <Friendcard name="Ngoc Hai" />
            <Friendcard name="Hung Nguyen" />
            <Friendcard name="Huu Huy" />
            <Friendcard name="Vinh Quang" />
            <Friendcard name="Chau Anh" />
          </div>
        </div>
        <div className="friend-request">
          <h1>Friend Requests</h1>
          <div className="total-request">
            <Requestcard name="Do Khoi" />
            <Requestcard name="Ngoc Tram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
