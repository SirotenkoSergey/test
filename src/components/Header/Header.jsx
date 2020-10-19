import React from "react";
import c from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bell from "../../assets/images/bell.svg";
import plus from "../../assets/images/plus.svg";
import loupe from "../../assets/images/loupe.svg";
import calendar from "../../assets/images/calendar.svg";
import settings from "../../assets/images/settings.svg";
import avatar from "../../assets/images/header-avatar.png";

const Header = (props) => {
  return (
    <header className={c.header}>
      <div className={c.header__leftWrap}>
        <div className={c.header__logoWrapper}>
          <img src={`${logo}`} alt="logo" className={c.header__logo} />
        </div>
        <nav className={c.nav}>
					<div className={c.nav__mobile}>
						<div className={c.nav__item}>
              <div className={c.nav__link}>
                Menu
              </div>
            </div>
					</div>
          <div className={c.nav__list}>
            <div className={c.nav__item}>
              <NavLink to="/home" className={c.nav__link}>
                Home
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/travel" className={c.nav__link}>
                Travel
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/suppliers " className={c.nav__link}>
                Suppliers
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/locations" className={c.nav__link}>
                Locations
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/platforms" className={c.nav__link}>
                Platforms
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/dossiers" className={c.nav__link}>
                Dossiers
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/margin" className={c.nav__link}>
                Margin
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/bills" className={c.nav__link}>
                Bills
              </NavLink>
            </div>
            <div className={c.nav__item}>
              <NavLink to="/reports" className={c.nav__link}>
                Reports
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div className={c.header__rightWrap}>
        <div className={c.controlItems}>
          <div className={c.controlItems__list}>
            <div className={c.controlItems__item}>
              <NavLink to="/d" className={c.controlItems__link}>
                <img src={`${loupe}`} alt="loupe" />
              </NavLink>
            </div>
            <div className={c.controlItems__item}>
              <NavLink to="/d" className={c.controlItems__link}>
                <img src={`${bell}`} alt="bell" />
              </NavLink>
            </div>
            <div className={c.controlItems__item}>
              <NavLink to="/d" className={c.controlItems__link}>
                <img src={`${plus}`} alt="plus" />
              </NavLink>
            </div>
            <div className={c.controlItems__item}>
              <NavLink to="/d" className={c.controlItems__link}>
                <img src={`${calendar}`} alt="calendar" />
              </NavLink>
            </div>
            <div className={c.controlItems__item}>
              <NavLink to="/d" className={c.controlItems__link}>
                <img src={`${settings}`} alt="settings" />
              </NavLink>
            </div>
          </div>
          <div className={c.controlItems__avatarWrap}>
            <div className={c.controlItems__avatar}>
              <img src={`${avatar}`} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
