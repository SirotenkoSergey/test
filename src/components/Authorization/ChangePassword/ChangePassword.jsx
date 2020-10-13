import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import {
  passwordsMustMatch,
  required,
} from "../../../utils/validation/validation";
import { Password } from "../FormControl/FormControl";
import c from "./ChangePassword.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import eye from "../../../assets/images/eye.png";

class ChangePasswordForm extends React.Component {
  state = {
    isShowNewPassword: false,
    isShowConfirmNewPassword: false,
  };

  toggleShowNewPassword = () => {
    const { isShowNewPassword } = this.state;
    this.setState({ isShowNewPassword: !isShowNewPassword });
  };

  toggleShowConfirmPassword = () => {
    const { isShowConfirmNewPassword } = this.state;
    this.setState({ isShowConfirmNewPassword: !isShowConfirmNewPassword });
  };

  composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  render() {
    const { isShowNewPassword, isShowConfirmNewPassword } = this.state;
    return (
      <Form onSubmit={(value) => console.log(value)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="newPassword"
                types={isShowNewPassword ? "text" : "password"}
                type="password"
                component={Password}
                placeholder="New Password"
                validate={this.composeValidators(required)}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowNewPassword()}
              >
                <img src={eye} alt="" />
              </span>
            </div>
            <div className={c.form__item}>
              <Field
                name="confirmNewPassword"
                types={isShowConfirmNewPassword ? "text" : "password"}
                component={Password}
                placeholder="Confirm New Password"
                validate={this.composeValidators(required, passwordsMustMatch)}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowConfirmPassword()}
              >
                <img src={eye} alt="" />
              </span>
            </div>
            <div className={c.form__btn}>
              <button type="submit" className={`btn`}>
                CHANGE
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const ChangePassword = (props) => {
  if (false) return <Redirect to={"/login"} />;
  return (
    <div className={c.changePassword}>
      <div className={`loginTitle`}>Change Password</div>
      <ChangePasswordForm />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default ChangePassword;
