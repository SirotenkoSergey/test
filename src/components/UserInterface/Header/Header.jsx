import React from "react";
import c from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import bell from "../../../assets/images/bell.svg";
import plus from "../../../assets/images/plus.svg";
import loupe from "../../../assets/images/loupe.svg";
import calendar from "../../../assets/images/calendar.svg";
import settings from "../../../assets/images/settings.svg";
import avatar from "../../../assets/images/header-avatar.png";

class Header extends React.Component {
  state = {
    isShowMobileMenu: false,
  };

  toggleShowMobileMenu = () => {
    const { isShowMobileMenu } = this.state;
    this.setState({ isShowMobileMenu: !isShowMobileMenu });
  };
  render() {
    const { isShowMobileMenu } = this.state;
    return (
      <header className={c.header}>
        <div className={c.header__leftWrap}>
          <div className={c.header__logoWrapper}>
            <img src={`${logo}`} alt="logo" className={c.header__logo} />
          </div>
          <nav className={c.nav}>
            <div className={c.nav__mobile}>
              <div className={c.nav__item}>
                <div
                  className={c.nav__link}
                  onClick={() => this.toggleShowMobileMenu()}
                >
                  Menu
                </div>
              </div>
              {isShowMobileMenu && (
                <div className={c.nav__mobileListWrap}>
                  <div className={c.nav__mobileList}>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/home" className={c.nav__mobileLink}>
                        Home
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/travel" className={c.nav__mobileLink}>
                        Travel
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/suppliers " className={c.nav__mobileLink}>
                        Suppliers
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/locations" className={c.nav__mobileLink}>
                        Locations
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/platforms" className={c.nav__mobileLink}>
                        Platforms
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/dossiers" className={c.nav__mobileLink}>
                        Dossiers
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/margin" className={c.nav__mobileLink}>
                        Margin
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/bills" className={c.nav__mobileLink}>
                        Bills
                      </NavLink>
                    </div>
                    <div className={c.nav__mobileItem}>
                      <NavLink to="/reports" className={c.nav__mobileLink}>
                        Reports
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
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
                <NavLink to="/user-management" className={c.controlItems__link}>
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
  }
}

export default Header;
