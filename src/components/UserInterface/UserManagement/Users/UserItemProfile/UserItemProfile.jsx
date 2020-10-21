import React from "react";
import c from "./UserItemProfile.module.scss";
import avatar from "../../../../../assets/images/anonim.png";
import UserContactInform from "./UserContactInform/UserContactInform";

const UserItemProfile = (props) => {
  return (
    <div className={c.user}>
      <div className={c.user__profile}>
      <div className={c.profile}>
        <div className={`${c.profile__avatar_block}`}>
        <div className={`${c.profile__avatar_wrap}`}>
          <img
            src={`${avatar}`}
            alt="avatar"
            className={`${c.profile__avatar}`}
          />
        </div>
        <span className={`${c.profile__avatar_btn}`}>Change</span>
        </div>
        <div className={c.profile__info}>
          <div className={c.profile__name}>
            User Name
            <span className={c.profile__profile_status}>
              Administrator
            </span>
          </div>
          <div className={c.profile__contact_inform}>
            <div className={c.profile__email}>
              <a href="mailto: tester@softgrad.com">tester@softgrad.com</a>
              </div>
            <div className={c.profile__phone}>
            <a href="tel: +0 200 00 23 24">+0 200 00 23 24</a></div>
          </div>
        </div>
      </div>
      </div>
      <div className={c.user__contact_inform}>
        <UserContactInform />
      </div>
    </div>
  );
};

export default UserItemProfile;
