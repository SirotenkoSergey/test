import { connect } from "react-redux";
import { changeValueSelectBox, isToggleSelectBox } from "../../../../redux/user-management-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    isShowList: state.userManagement.selectBox.isShowList,
    defaultSelectItem: state.userManagement.selectBox.defaultSelectItem,
    selectList: state.userManagement.selectBox.selectList,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeValueSelectBox: (changedValue) => {
      dispatch(changeValueSelectBox(changedValue));
    },
    isToggleSelectBox: () => {
      dispatch(isToggleSelectBox());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);