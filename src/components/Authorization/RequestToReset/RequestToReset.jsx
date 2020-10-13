import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./RequestToReset.module.scss";
import arrow from "../../../assets/images/arrow-left.png";

const RequestToResetForm = (props) => {
  const composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  return (
    <Form onSubmit={(value) => console.log(value)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={c.form}>
          <div className={c.form__item}>
            <Field
              name="email"
              component={Input}
              placeholder="Email address"
              validate={composeValidators(required, email)}
            />
          </div>
          <div className={c.form__btn}>
            <button type="submit" className={`btn`}>
              reset password
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

const RequestToReset = (props) => {
  return (
    <div className={c.request}>
      <div className={`loginTitle`}>Request to reset your password</div>
      <RequestToResetForm />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="logo" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default RequestToReset;
