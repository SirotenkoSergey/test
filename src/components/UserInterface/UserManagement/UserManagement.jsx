import React from "react";
import SideBar from "../SideBar/SideBar";
import c from "./UserManagement.module.scss";
import UsersContainer from "./Users/UsersContainer";

class UserManagement extends React.Component {
  isToggleSelectBox = () => {
    this.props.isToggleSelectBox();
  };

  changeValueSelectBox = (value) => {
    this.props.changeValueSelectBox(value);
  };

  render() {
    return (
      <div className={c.user_management}>
        <div className={c.user_management__sidebar}>
          <SideBar />
        </div>
        <div className={c.user_management__content}>
          <UsersContainer />
        </div>

      </div>
    );
  }
}

export default UserManagement;
