import React from 'react'
import '../scss/components/Sidebar.css'

const Sidebar = () => {
  return (
        <div className="sidebar">
                <button>
                <i class="fa-solid fa-house"></i>
                </button>
                <button>
                <i class="fa-solid fa-message"></i>
                </button>
                <button>
                <i class="fa-solid fa-people-group"></i>
                </button>
                <button>
                <i class="fa-solid fa-sliders"></i>
                </button>
                <button>
                <i class="fa-solid fa-note-sticky"></i>
                 </button>
                </div>
  )
}

export default Sidebar