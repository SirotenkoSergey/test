import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import s from "./UserInterface.module.scss";

const UserInterface = (props) => {
  return <div className={s.userInterface}>
      <HeaderContainer />
  </div>;
};

export default UserInterface;
