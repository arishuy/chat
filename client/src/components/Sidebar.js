import React from "react";
import "../scss/components/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button>
        <Link to="/dashboard">
          <i class="fa-solid fa-house"></i>
        </Link>
      </button>
      <button>
        <Link to="/Message_Contact">
          <i class="fa-solid fa-message"></i>
        </Link>
      </button>
      <button>
        <Link to="/People">
          <i class="fa-solid fa-people-group"></i>
        </Link>
      </button>
      <button>
        <Link to="/Setting">
          <i class="fa-solid fa-sliders"></i>
        </Link>
      </button>
      <button>
        <Link to="/Reminder">
          <i class="fa-solid fa-note-sticky"></i>
        </Link>
      </button>
      <button className="b1">
        <a href="https://www.facebook.com/huy9819/">
          <i class="fa-sharp fa-solid fa-paper-plane about_us"></i>
        </a>
      </button>
    </div>
  );
};

export default Sidebar;
