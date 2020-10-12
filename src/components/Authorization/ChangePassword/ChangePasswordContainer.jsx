import { connect } from "react-redux";
import ChangePassword from "./ChangePassword";
import { showPassword } from "../../../redux/login-reducer";


const mapStateToProps = (state) => {
  return {
    typePassword: state.login.typePassword
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPassword: (value) => {
      dispatch(showPassword(value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);