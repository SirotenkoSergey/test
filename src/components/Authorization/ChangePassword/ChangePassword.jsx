import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { required, newPassword } from "../../../utils/validation/validation";
import { Password } from "../FormControl/FormControl";
import c from "./ChangePassword.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import eye from "../../../assets/images/eye.png";
import axios from 'axios';


class ChangePasswordForm extends React.Component {
  state = {
    isShowNewPassword: false,
    isShowConfirmNewPassword: false,
    isRequestToLogin: false,
    error: {},
    message: {},
    token: null,
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

  onSubmit = (form) => {
    let token = window.location.search.split('?')[1].split('=')[1];
    if(!token) {
      alert('You are not authorized');
      return;
    }
    console.log(form, token);
    axios.post('http://18.184.124.193/api/v1/reset-password', {
      password: form.newPassword,
      password_confirmation: form.confirmNewPassword, 
      token: token
    }).then(res => {
      if(res.data.success) {
        this.setState({ 'message': 'Your password has been successfully changed' });
        this.setState({ 'error': {} });
        setTimeout(() => {
          window.location = '/login';
        }, 5000);
      }else{
        this.setState({'error':  res.data.errors});
      } 
    }).catch(err => {
      this.setState({'error': { 500: 'Initial server error'} });
    });
  };

  render() {
    const { error, message } = this.state;
    if (this.state.isRequestToLogin) {
      return <Redirect to="/login" />;
    }
    const { isShowNewPassword, isShowConfirmNewPassword } = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={(values) => {
          const errors = {};
          if (values.confirmNewPassword !== values.newPassword) {
            errors.confirmNewPassword = "Must match";
          }
          return errors;
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="newPassword"
                types={isShowNewPassword ? "text" : "password"}
                type="password"
                component={Password}
                placeholder="New Password"
                validate={this.composeValidators(required, newPassword)}
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
                validate={this.composeValidators(required)}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowConfirmPassword()}
              >
                <img src={eye} alt="" />
              </span>
            </div>
            <div>
              <p>{Object.values(error)}</p> 
              <p>{Object.values(message)}</p> 
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
