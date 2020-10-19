import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./RequestToReset.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const recaptchaRef = React.createRef();
class RequestToResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestToLogin: false,
      error: {},
      message: {}
    }; 
  }

  /*reCaptchaVerify = (e) => {
    e.preventDefault();
     this.grecaptcha.ready(function() {
      this.grecaptcha.execute('6LcPUdcZAAAAAHkgp3H7Ce5YUeHSLFTy1QYkQY4J', {action: 'submit'}).then(function(token) {
        console.log(token);
      });
    });
  }*/

  onChange = (value) => {
    console.log("Captcha value:", value);
  } 

  onSubmit = (form) => {

    axios.post('http://18.184.124.193/api/v1/forgot-password', {
      ...form, recaptcha: recaptchaRef.current.getValue()
    }).then(res => {
      res.data.success ? this.setState({ 'message': res.data.messages }) : this.setState({'error':  res.data.errors});
    }).catch(err => {
      this.setState({'error': { 500: 'Initial server error'} });
    });
  }

  composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );


  render() {
    if (this.state.isRequestToLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="email"
                component={Input}
                placeholder="Email address"
                validate={this.composeValidators(required, email)}
              />
            </div>
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf6FdgZAAAAANSZJMa6YoHTo1gRDcJEUjMN1a89"
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
  }
}

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
