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
import eye from "../../../assets/images/eye.png";
import { connect } from 'react-redux';
import { login } from '../../../actions/Login'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
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
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (form) => {
    this.setState({ 
      errors: {}, 
      isLoading: true, 
      identifier: form.identifier, 
      password: form.password
    });

    login(this.state).then(
      (res) => this.context.router.push('/'),
      (err) => this.setState({ errors: err.data.errors, isLoading: false})
    )
  } 

  render() {
    const { errors, identifier, password, isShowPassword } = this.state;
    return (
      <Form onSubmit={(form) => this.onSubmit(form)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
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
                <img src={eye} alt="" />
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

export default connect(null, { login })(LoginPage);
