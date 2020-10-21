import React from "react";
import { NavLink } from "react-router-dom";
import c from "./SideBar.module.scss";

const SideBar = (props) => {
  return (
    <div className={c.sidebar}>
      <div className={c.sidebar__mobile_btn}>
        <div className={c.sidebar__btn_text}>Setup</div>
      </div>

      <div className={c.sidebar__wrap}>
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
    </div>
  );
};

export default SideBar;
