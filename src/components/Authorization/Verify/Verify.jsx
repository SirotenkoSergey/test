import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./Verify.module.scss";
import arrow from "../../../assets/images/arrow-left.png";

const VerifyForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={c.form}>
      <div className={c.form__item}>
        <Field
          name="verify"
          component={Input}
          placeholder="Enter security code"
          validate={[required]}
        />
      </div>
      <div className={c.form__btn}>
        <button type="submit" className={`btn`}>
          Verify
        </button>
      </div>
    </form>
  );
};

const VerifyReduxForm = reduxForm({
  form: "verify",
})(VerifyForm);

const Verify = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  if (false) return <Redirect to={"/login"} />;
  return (
    <div className={c.verify}>
      <div className={`loginTitle`}>Verify</div>
      <div className={c.verify__text}>Sms was sent to phone number 🞄🞄🞄 🞄🞄 🞄🞄95.<br/> Please enter secure code below:</div>
      <VerifyReduxForm onSubmit={onSubmit} />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default Verify;
