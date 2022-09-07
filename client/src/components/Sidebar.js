import React from 'react'
import '../scss/components/Sidebar.css'
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
        <div className="sidebar">
                <button>
                <Link to = "/">
                <i class="fa-solid fa-house"></i>
                </Link>
                </button>
                <button>
                  <Link to = "/Message_Contact">
                <i class="fa-solid fa-message"></i>
                </Link>
                </button>
                <button>
                <Link to = "/People">
                <i class="fa-solid fa-people-group"></i>
                </Link></button>
                <button>
                <Link to = "/Setting">
                <i class="fa-solid fa-sliders"></i>
                </Link>
                </button>
                <button>
                <Link to = "/Reminder">
                <i class="fa-solid fa-note-sticky"></i>
                </Link>
                 </button>
                 <button>
                 <i class="fa-sharp fa-solid fa-paper-plane about_us"></i>
                 </button>
                </div>
  )
}

export default Sidebar