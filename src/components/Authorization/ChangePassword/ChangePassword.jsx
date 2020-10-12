import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validation/validation";
import { Password } from "../FormControl/FormControl";
import c from "./ChangePassword.module.scss";
import arrow from "../../../assets/images/arrow-left.png";

const ChangePasswordForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit} className={c.form}>
      <div className={c.form__item}>
        <Field
          name="newPassword"
          type={`${props.typePassword}`}
          component={Password}
          placeholder="New Password"
          validate={[required]}
          showPassword={props.showPassword}
        />
      </div>
      <div className={c.form__item}>
        <Field
          name="confirmNewPassword"
          type="password"
          component={Password}
          placeholder="Confirm New Password"
          validate={[required]}
        />
      </div>
      <div className={c.form__btn}>
        <button type="submit" className={`btn`}>
          CHANGE
        </button>
      </div>
    </form>
  );
};

const ChangePasswordReduxForm = reduxForm({
  form: "verify",
})(ChangePasswordForm);

const ChangePassword = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  if (false) return <Redirect to={"/login"} />;
  return (
    <div className={c.changePassword}>
      <div className={`loginTitle`}>Change Password</div>
      <ChangePasswordReduxForm onSubmit={onSubmit} typePassword={props.typePassword} showPassword={props.showPassword}/>
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default ChangePassword;
