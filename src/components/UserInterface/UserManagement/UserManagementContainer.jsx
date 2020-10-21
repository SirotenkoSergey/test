import { connect } from "react-redux";
import UserManagement from "./UserManagement";

// const mapStateToProps = (state) => {
//   return {
//     isShowList: state.userManagement.selectBox.isShowList,
//     defaultSelectItem: state.userManagement.selectBox.defaultSelectItem,
//     selectList: state.userManagement.selectBox.selectList,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeValueSelectBox: (changedValue) => {
//       dispatch(changeValueSelectBox(changedValue));
//     },
//     isToggleSelectBox: () => {
//       dispatch(isToggleSelectBox());
//     }
//   }
// }

export default connect()(UserManagement);