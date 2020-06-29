import React from "react";
import a from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  if (props.Id > 1) {
    props.newMessageCount();
    setInterval(() => {
      props.newMessageCount();
    }, 30000);
  }
  return (
    <header className={a.header}>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1605413/2d7ca512-f063-43a7-bf0f-6175b35577fb/s1200?webp=false"
        alt="asd"
      />

      {!props.Id ? (
        <NavLink to="/login" className={a.login}>
          Login
        </NavLink>
      ) : (
        <div className={a.positionHeaderBlock}>
          <span
            className={
              props.newMessages !== 0
                ? a.new + " " + a.newMessage + " " + a.positionHeaderBlock
                : a.newMessage + " " + a.positionHeaderBlock
            }
          >
            {props.newMessages}
          </span>
          <button
            onClick={props.endSession}
            className={a.logOut}
            title="Кликни, чтобы выйти из аккаунта"
          >
            {props.Login}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
