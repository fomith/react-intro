import React from "react";
import a from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import baseAvatar from "../../../image/4.png";

const Dialog = (props) => {
  return (
    <div className={a.item}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={a.active}>
        <img
          className={props.newMessagesCount > 0 ? a.avatar + " " + a.newMessages : a.avatar}
          src={!props.photos ? baseAvatar : props.photos}
          alt="Avatar"
        ></img>

        <p>{props.name}</p>
      </NavLink>
    </div>
  );
};

export default Dialog;
