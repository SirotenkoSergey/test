import { connect } from "react-redux";
import { checkboxToggle } from "../../../redux/login-reducer";
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    checkBoxValue: state.login.checkbox
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkboxToggle: (value) => {
      dispatch(checkboxToggle(value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);