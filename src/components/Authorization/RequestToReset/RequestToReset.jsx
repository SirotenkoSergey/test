import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./RequestToReset.module.scss";
import arrow from "../../../assets/images/arrow-left.png";

const RequestToResetForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={c.form}>
      <div className={c.form__item}>
        <Field
          name="email"
          component={Input}
          placeholder="Email address"
          validate={[required, email]}
        />
      </div>
      <div className={c.form__btn}>
        <button type="submit" className={`btn`}>
          reset password
        </button>
      </div>
    </form>
  );
};

const RequestReduxForm = reduxForm({
  form: "requestToReset",
})(RequestToResetForm);

const RequestToReset = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  if (false) return <Redirect to={"/login"} />;
  return (
    <div className={c.request}>
      <div className={`loginTitle`}>Request to reset your password</div>
      <RequestReduxForm onSubmit={onSubmit} />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="logo" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default RequestToReset;
