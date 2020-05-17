import React from "react";
import a from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className={a.left + " " + a.top + " " + a.right}>
        <ul>
          <li>
            <NavLink to={`/profile/` + props.id } activeClassName={a.active}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={a.active}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName={a.active}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={a.active}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={a.active}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting" activeClassName={a.active}>
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={a.friendsBlock}>
        <h3>Мои друзья</h3>
        <ul>
          <li>
            <NavLink to="/2" activeClassName={a.active}>
              Ваня
            </NavLink>
          </li>
          <li>
            <NavLink to="/3" activeClassName={a.active}>
              Валя
            </NavLink>
          </li>
          <li>
            <NavLink to="/4" activeClassName={a.active}>
              Зина
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
