import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Login.module.scss";
import LoginForm from './LoginForm/LoginForm';

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