import React from "react";
import a from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";
import { authMeAPI } from "../../api/api";

const Header = (props) => {
  authMeAPI()
    .then((response) => {
      return {
        id: response.data.data.id,
        login: response.data.data.login,
        email: response.data.data.email,
      };
    })
    .then((data) => {
      props.auth(data);
    });
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
        <NavLink to="/login" className={a.login}>
          {props.Login}
        </NavLink>
      )}
    </header>
  );
};

export default Header;
