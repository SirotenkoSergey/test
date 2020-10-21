import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
import c from "./UserInterface.module.scss";
import UserManagementContainer from "./UserManagement/UserManagementContainer";

const UserInterface = (props) => {
  return (
    <div className={c.userInterface}>
      <HeaderContainer />
      <Route path="/user-management"  render={() => <UserManagementContainer />} />
    </div>
  );
};

export default UserInterface;
