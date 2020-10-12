import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./Login.module.scss";

const LoginForm = (props) => {
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
      <div className={c.form__item}>
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password"
          validate={[required]}
        />
      </div>
      <div className={c.form__item}>
        <Field
          name="remember"
          component={"input"}
          type="checkbox"
          className={c.form__checkbox}
        />
        <label htmlFor="remember" className={c.form__checkboxLabel}>
          Remember me
        </label>
      </div>
      <div className={c.form__btn}>
        <button type="submit" className={`btn`}>
          Submit
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={c.login}>
      <div className={`loginTitle`}>Sign in</div>
      <LoginReduxForm onSubmit={onSubmit} />
      <div className={c.login__link}>
        <NavLink to='/request-to-reset' className={c.login__forgetPassword}>I don’t remember my password</NavLink>
      </div>
    </div>
  );
};

export default Login;
