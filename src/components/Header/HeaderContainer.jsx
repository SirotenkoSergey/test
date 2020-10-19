import React from "react";
import Header from './Header';
import axios from 'axios';
import { connect } from "react-redux";
import setAuthUserData from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`/some/APIs/URL`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                this.props.setAuthData(response.data.data.login)
            }
        })
    }

    render() {
        return ( <Header {...this.props} />);
    }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {setAuthData })