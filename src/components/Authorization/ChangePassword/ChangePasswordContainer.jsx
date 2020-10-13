import React from "react";
import { connect } from "react-redux";
import ChangePassword from "./ChangePassword";


class ChangePasswordContainer extends React.Component {

  render() {
    return (
      <ChangePassword
        {...this.props}

      />
    );
  }
}

export default connect()(ChangePasswordContainer);
