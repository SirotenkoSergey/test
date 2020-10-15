import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./RequestToReset.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
class RequestToResetForm extends React.Component {
  state = {
    isRequestToLogin: false,
  };

  onChange = (value) => {
    console.log("Captcha value:", value);
  } 

  onSubmit = (value) => {
    recaptchaRef.current.execute();
    this.setState({ isRequestToLogin: true });
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
                size="invisible"
                sitekey="Your client site key"
              />
            </div>
            <div className={c.form__btn}>
              <button type="submit" className={`btn`} >
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
