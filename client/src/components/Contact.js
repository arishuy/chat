import React from "react";
import "../scss/components/Contact.css";
import Contactcard from "./Card/Contactcard";
import Photo from "./Card/Photo";
const Contact = () => {
  return (
    <div className="contact-body">
      <div className="contact-content">
        <div className="contact-regular">
          <h1>Regular Contact</h1>
          <div className="contact-avatar">
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
          </div>
        </div>
        <div className="search">
          <div className="search-content">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Enter a name"></input>
          </div>
        </div>
      </div>
      <div className="contact-message">
        <Contactcard />
        <Contactcard />
        <Contactcard />
        <Contactcard />
      </div>
    </div>
  );
};

export default Contact;
