import React from "react";
import Header from './Header';
import { connect } from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return ( <Header {...this.props} />);
    }
}

export default connect()(HeaderContainer);