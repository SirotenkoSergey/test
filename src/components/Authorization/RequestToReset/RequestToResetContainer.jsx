import { connect } from "react-redux";
import RequestToReset from "./RequestToReset";

// const mapStateToProps = (state) => ({
//   successRequest: state.login.successRequest
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     isRedirectPageRequest: () => {
//       dispatch(isRedirectPageRequest());
//     },
//     isRedirectPageDontRequest: () => {
//       dispatch(isRedirectPageDontRequest());
//     }
//   }
// }

export default connect()(RequestToReset);