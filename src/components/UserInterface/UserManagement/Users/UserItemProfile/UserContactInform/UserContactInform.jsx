import React from "react";
import c from "./UserContactInform.module.scss";
import pensil from "../../../../../../assets/images/pensil.png";
import UserContactInformForm from "./UserContactInformForm/UserContactInformForm";

const UserContactInform = (props) => {
  return (
    <div className={c.contact_inform}>
      <div className={c.contact_inform__wrap}>
        <div className={c.contact_inform__title}>Contact Information</div>
        <div className={c.contact_inform__edit}>
          <img src={`${pensil}`} alt="edit" />
        </div>
      </div>
      <div className={c.contact_inform__form_wrap}>
        <UserContactInformForm />
      </div>
    </div>
  );
};

export default UserContactInform;
