import React from "react";
import Button from "./Button";
import "../scss/components/Chatwindow.css";
import Messcard from "./Card/Messcard";
const Chatwindow = () => {
  return (
    <div className="chat">
      <div className="chat-profile">
        <div className="contact-avatar-chat">
          <img
            className="avatar__image"
            src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
          ></img>
        </div>
        <h1 className="chat-h1">Huy Bui</h1>
        <span className="chat-span">Active now</span>
        <div className="button-group">
          <Button title="Profile" />
          <Button title="Change theme" />
          <Button title="Search" />
          <Button title="Block" />
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-content__message">
          <Messcard content="Alo 1 2 3 test chuong trinh" />
          <Messcard content="123456 co ai nghe thay khong" />
          <Messcard content="Co anh Huy nghe ne" />
        </div>
        <div className="chat-content__input">
          <i class="fa-solid fa-chevron-right send"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Search person..."
          />
          <i class="fa-solid fa-image image"></i>
          <i class="fa-solid fa-file file"></i>
          <i class="fa-solid fa-thumbs-up like"></i>
        </div>
      </div>
    </div>
  );
};

export default Chatwindow;
