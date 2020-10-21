import React from "react";
import c from "./UserItem.module.scss";
import avatar from "../../../../../assets/images/anonim.png";

const UserItem = (props) => {
  return (
    <div className={c.user_item}>
      <div className={`${c.user_item__avatar_wrap}  ${c.active}`}>
        <img
          src={`${avatar}`}
          alt="avatar"
          className={`${c.user_item__avatar} ${c.border_status} `}
        />
      </div>
      <div className={c.user_item__info}>
        <div className={c.user_item__name}>User Name <span className={c.user_item__profile_status}>Super Admin</span></div>

        <div className={c.user_item__email}>tester@softgrad.com</div>
      </div>
    </div>
  );
};

export default UserItem;
