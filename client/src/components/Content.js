import React from 'react'
import '../scss/components/Content.css'
const Content = () => {
  return (
    <div className="content col-full">
        
        <div className="message col-half">
        <h1>Message</h1>    
            <div className="message-content">
                <div className="contact-avatar kimochi">
            <img
              className="avatar__image"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
                <div className="message-text">
                <h1>Huy Bui</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>   
                </div>
            </div>
            <div className="message-content">
                <div className="contact-avatar kimochi">
            <img
              className="avatar__image"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
                <div className="message-text">
                <h1>Huy Bui</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>   
                </div>
            </div>
            <div className="message-content">
                <div className="contact-avatar kimochi">
            <img
              className="avatar__image"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
                <div className="message-text">
                <h1>Huy Bui</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>   
                </div>
            </div>
          </div>
          <div className="reminder col-half">
             <div className="header-remind">Reminder</div>
            <div className="reminder-content">
                <div className="message">
                    <div className="reminder-item">
                        <i className="fa-solid fa-calendar-alt"></i>
                        <h1>Meet Uyen Hoang</h1>
                        <p>20/7/2022</p>
                    </div>
                </div>
                <div className="message">
                    <div className="reminder-item">
                        <i className="fa-solid fa-calendar-alt"></i>
                        <h1>Watch movie</h1>
                        <p>21/7/2022</p>
                    </div>
                </div>
                <div className="message">
                    <div className="reminder-item">
                        <i className="fa-solid fa-calendar-alt"></i>
                        <h1>Go to library</h1>
                        <p>22/7/2022</p>
                    </div>
                </div>
              </div>
              </div>
    </div>
  )
}

export default Content