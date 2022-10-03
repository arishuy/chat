import React from 'react'

const Rankcard = (props) => {
    return (
        <div className="rank-content" >
          <div className="contact-avatar kimochi">
            <img
              className="avatar__image"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
          <div className="rank-name">
            <h1>{props.name}</h1>
            <p className="rank-amount-mess">
                {props.amountMess}
            </p>
          </div>
        </div>
    )
}

export default Rankcard