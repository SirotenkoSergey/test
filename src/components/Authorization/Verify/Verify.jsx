import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./Verify.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

class VerifyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      successRequest: false,
      error: {},
      message: {},
      userId: null,
      phoneNumber: null,
      setToken: null,
    };  
  }
  onSubmit = (form) => {  
    axios.post('http://18.184.124.193/api/v1/verify', {
      user_id: localStorage.getItem('user_id'), code: form.verify
    }).then(res => {
      if(res.data.success) {
        window.location = '/';
      } else {
        this.setState({'error':  res.data.errors});
      }
    }).catch(err => {
      this.setState({'error': { 500: 'Initial server error'} });
    });
  };

  render() {
    const { error, message } = this.state;
    if (this.state.successRequest) {
      return <Redirect to="/login" />;
    }
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="verify"
                component={Input}
                placeholder="Enter security code"
                validate={required}
              />
            </div>
            <div>
              <GoogleReCaptcha onVerify={ (token) => { this.setState({'setToken': token}) } } />
            </div>
            <div>
              <p>{Object.values(error)}</p> 
            </div>
            <div className={c.form__btn}>
              <button type="submit" className={`btn`}>
                Verify
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const Verify = (props) => {
  return (
    <div className={c.verify}>
      <div className={`loginTitle`}>Verify</div>
      <div className={c.verify__text}>
        Sms was sent to phone number 🞄🞄🞄 🞄🞄 🞄🞄95.
        <br /> Please enter secure code below:
      </div>
      <VerifyForm />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default Verify;
