import React from "react";
import { Form, Field } from "react-final-form";
import {
  email,
  required,
  maxLengthControl,
} from "../../../../utils/validation/validation";
import { Input, Password } from "../../FormControl/FormControl";
import eye from "../../../../assets/images/eye.png";
import { login } from "../../../../actions/user";
import c from "../Login.module.scss";
import { connect } from "react-redux";

let createHandlers = function(dispatch) {
    let sendForm = function(identifier, password, remember) {
        dispatch(login(identifier, password, remember));
    };
    return { sendForm };
}

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        validationError: {},
        submitErrors: [],
        message: {},
        isShowPassword: false,
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.handlers = createHandlers(this.props.dispatch);
    }
    
    toggleShowNewPassword = () => {
      const { isShowPassword } = this.state;
      this.setState({ isShowPassword: !isShowPassword });
    };
  
    composeValidators = (...validators) => (value) =>
      validators.reduce(
        (validationError, validator) => validationError || validator(value),
        undefined
      );
  
    maxLength = maxLengthControl(60);
  
    onSubmit = (form) => {
        this.handlers.sendForm(form.identifier, form.password, false);
        setTimeout(() => {
          this.setState({'submitErrors': window.store.getState().error.errors});
        },1000);
    }
  
    render() {
      const { identifier, password, isShowPassword, message, submitErrors } = this.state;
      
      return (
        <Form onSubmit={(form) => {this.onSubmit(form)} } >
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
              <div>
                <ul>
                  {submitErrors.map((error) =>
                    <li key={Object.keys(error)}>{Object.values(error)}</li>
                  )}  
                </ul>
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

  export default connect()(LoginForm);