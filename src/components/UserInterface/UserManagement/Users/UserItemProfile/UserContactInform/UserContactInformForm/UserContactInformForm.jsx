import React from "react";
import c from "./UserContactInformForm.module.scss";

class UserContactInformForm extends React.Component {
  render() {
    return (
      <div className={c.form}>
        <div className={c.form__item}>
          <div className={c.form__title}>First Name</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`User`} className={c.form__input}/>
          </div>
        </div>
        <div className={c.form__item}>
          <div className={c.form__title}>Last Name</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`Name`} className={c.form__input}/>
          </div>
        </div>
        <div className={c.form__item}>
          <div className={c.form__title}>Email</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`tester@softgrad.com`} className={c.form__input}/>
          </div>
        </div>
        <div className={c.form__item}>
          <div className={c.form__title}>Phone Number</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`+0 000 00 23 24`} className={c.form__input}/>
          </div>
        </div>
        <div className={c.form__item}>
          <div className={c.form__title}>Preferred Language</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`English`} className={c.form__input}/>
          </div>
        </div>
        <div className={c.form__item}>
          <div className={c.form__title}>Active</div>
          <div className={c.form__input_wrap}>
            <input type="text" value={`User`} className={c.form__input}/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserContactInformForm;
