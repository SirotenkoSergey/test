import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./Verify.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import axios from 'axios';
import { useSelector } from "react-redux";

class VerifyForm extends React.Component {
  state = {
    successRequest: false,
    error: {},
    message: {}
  };

  onSubmit = (form) => {
    userId = useSelector(state => state.auth.userId)
    axios.post('http://18.184.124.193/api/v1/change-password', {
      ...form, userId
    }).then(res => {
      if(res.data.success) {

      }else{
        this.setState({'error': res.data.error });
      }
    }).catch( () => {
      this.setState({'error': { 500: 'Initial server error' } });
    });
  };

  render() {
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
