import React from 'react';
import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    typeLoginPassword: state.login.typeLoginPassword
  };
}

class LoginContainer extends React.Component {

  render() {
      return (
          <Login {...this.props} />
      )
  }
}
export default connect(mapStateToProps)(LoginContainer);
