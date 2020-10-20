import React from "react";
import c from "./Authorization.module.scss";
import bg from "../../assets/images/bg-login.png";
import logo from "../../assets/images/logo.png";
import LoginContainer from "./Login/LoginContainer";

import RequestToResetContainer from "./RequestToReset/RequestToResetContainer";
import VerifyContainer from "./Verify/VerifyContainer";
import ChangePasswordContainer from "./ChangePassword/ChangePasswordContainer";
import { Route, Router } from 'react-router';
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../../redux/redux-store';

const sectionStyle = {
  backgroundImage: `url(${bg})`,
};
const history = syncHistoryWithStore(createBrowserHistory(), store )

const Authorization = (props) => {
  return (
    <div className="page-authorization" style={sectionStyle}>
      <div className="authorization-block">
        <div className="authorization-block__content">
          <div className={c.authorization}>
            <div className={c.authorization__logoWrap}>
              <img src={logo} alt="logo" className={c.authorization__logo} />
            </div>
            <Router history={history} >
              <Route path="/login"  component={() => <LoginContainer />} />
              <Route path="/request-to-reset" render={() => <RequestToResetContainer />} />
              <Route path="/verify" render={() => <VerifyContainer />} />
              <Route path="/change-password" render={() => <ChangePasswordContainer />} />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
