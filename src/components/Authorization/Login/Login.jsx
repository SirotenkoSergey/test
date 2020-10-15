import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import {
  email,
  required,
  maxLengthControl,
} from "../../../utils/validation/validation";
import { Input, Password } from "../FormControl/FormControl";
import c from "./Login.module.scss";
import eyeClose from "../../../assets/images/close-eye.png";
import eyeOpen from "../../../assets/images/open-eye.png";
import { FORM_ERROR } from "final-form";

class LoginForm extends React.Component {
  state = {
    isShowPassword: false,
  };

  toggleShowNewPassword = () => {
    const { isShowPassword } = this.state;
    this.setState({ isShowPassword: !isShowPassword });
  };

  composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  maxLength = maxLengthControl(60);

  onSubmit = (value) => {
    if (
      value.email !== "erikras@sd.sd" ||
      value.password !== "finalformrocks"
    ) {
      console.log("value");
      return { [FORM_ERROR]: "Invalid Username or Password" };
    } else {
      console.log(value);
    }
  };

  render() {
    const { isShowPassword } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit, submitError }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              {submitError && (
                <div className={`tooltip ${c.formError}`}>
                  <div className={`tooltip__text ${c.formError__text}`}>
                    {submitError}
                  </div>
                </div>
              )}
              <Field
                name="email"
                component={Input}
                placeholder="Email address"
                validate={this.composeValidators(
                  required,
                  email,
                  this.maxLength
                )}
              />
            </div>
            <div className={c.form__item}>
              <Field
                name="password"
                component={Password}
                types={isShowPassword ? "text" : "password"}
                placeholder="Password"
                validate={required}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowNewPassword()}
              >
                {isShowPassword ? (
                  <img src={eyeOpen} alt="" />
                ) : (
                  <img src={eyeClose} alt="" />
                )}
              </span>
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
            <div className={`form__btn ${c.form__btn}`}>
              <button
                type="submit"
                className={`btn`}
                onClick={() => this.submitUserData()}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const Login = (props) => {
  return (
    <div className={c.login}>
      <div className={`loginTitle`}>Sign in</div>
      <LoginForm />
      <div className={c.login__link}>
        <NavLink to="/request-to-reset" className={c.login__forgetPassword}>
          I don’t remember my password
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
