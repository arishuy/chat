import React from 'react'

const Friendcard = (props) => {
  return (
    <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>{props.name}</span>
            </div>
  )
}

export default Friendcard