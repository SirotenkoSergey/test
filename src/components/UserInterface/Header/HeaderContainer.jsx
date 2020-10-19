import React from "react";
import Header from './Header';
// import axios from 'axios';
import { connect } from "react-redux";
// import setAuthUserData from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    render() {
        return ( <Header {...this.props} />);
    }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(HeaderContainer)