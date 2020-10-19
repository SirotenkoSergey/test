import React from "react";
import { NavLink } from "react-router-dom";
import c from "./UserManagement.module.scss";

class UserManagement extends React.Component {
  render() {
    return (
      <div className={c.user_management}>
        <div className={c.sidebar}>
          <div className={c.sidebar__content}>
            <div className={c.sidebar__title}>Setup</div>
            <div className={c.sidebar__search_wrap}>
              <input
                type="text"
                className={c.sidebar__search}
                placeholder="Search"
              />
            </div>
            <div className={c.sidebar__nav}>
              <div className={c.nav}>
                <div className={c.nav__item}>
                  <div className={c.nav__item_title}>Users and Control</div>

                  <div className={c.nav__item_list}>
                    <div className={c.nav__list}>
                      <div className={c.nav__item_link}>
                        <NavLink
                          to="/home"
                          className={`${c.link} ${c.link_active}`}
                        >
                          Users
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Security Control
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Compliance Settings
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Territory Management
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={c.content_section}>
          <div className={c.content_section__header}>
            <div className={c.header}>
              <div className={c.header__title_wrap}>
                <div className={c.header__title}>Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserManagement;
