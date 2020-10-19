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
import axios from 'axios';
import { setAuthUserData } from "../../../redux/auth-reducer";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      error: {},
      message: {},
      ifLoading: false,
      isShowPassword: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (form) => {
    axios.post('http://18.184.124.193/api/v1/login', {
      identifier: form.identifier,
      password: form.password,
      remember: false
    }).then( res => {
      if(res.data.success) {
        this.props.setAuthUserData(res.data.id, this.data.email);
        localStorage.getItem('token', this.data.access_token);
        this.setState({'message': { success: 'success' }})
      } else {
        this.setState({ 'error': res.data.errors });
      }
    });
  }

  render() {
    const { errors, identifier, password, isShowPassword } = this.state;
    return (
      <Form onSubmit={(form) => this.onSubmit(form)}>
        {({ handleSubmit }) => (
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
                name="identifier"
                component={Input}
                placeholder="Email address"
                validate={this.composeValidators(
                  required,
                  email,
                  this.maxLength
                )}
                value={identifier}
                //onChange = {this.onChange}
              />
            </div>
            <div className={c.form__item}>
              <Field
                name="password"
                component={Password}
                types={isShowPassword ? "text" : "password"}
                placeholder="Password"
                validate={required}
                value={password}
                //onChange = {this.onChange}
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

            <div></div>
            <div className={`form__btn ${c.form__btn}`}> 
              <button type="submit" className={`btn`}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const LoginPage = (props) => {
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

export default LoginPage;
