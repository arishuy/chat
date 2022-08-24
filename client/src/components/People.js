import React from "react";
import "../scss/components/People.css";

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
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Huy Bui</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Uyen Hoang</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Nguyen Hung</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Vinh Nhan</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Ngoc Hai</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Huu Huy</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Minh Nhat</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Anh Khoa</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Thao Quyen</span>
            </div>
            <div className="friend-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Do Khoi</span>
            </div>
          </div>
        </div>
        <div className="friend-request">
          <h1>Friend Requests</h1>
          <div className="total-request">
            <div className="request-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
              <span>Do Khoi</span>
              <div className="group-button">
              <button className="button v">
              <i class="fa-solid fa-check"></i>
                </button>
                <button className="button x">
                <i class="fa-solid fa-x"></i>
                </button>
              </div>
            </div>
            <div className="request-info">
              <div className="contact-avatar">
                <img
                  className="avatar__image"
                  src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                  alt="avatar"
                ></img>
              </div>
                <span>Do Khoi</span>
                <div className="group-button">
              <button class="button v">
              <i class="fa-solid fa-check"></i>
                </button>
                <button class="button x">
                <i class="fa-solid fa-x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
