import React from "react";
import a from "./user.module.scss";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={a.flexC + " " + a.container}>
      <div className={a.flex}>
        <div className={a.colored + " " + a.flex}>
          <NavLink to={"/profile/" + props.UserId}>
            <img
              className={a.avatar}
              src={
                props.photos.small != null
                  ? props.photos.small
                  : "../image/4.png"
              }
              alt={props.FirstName}
            ></img>
          </NavLink>
          <span className={a.name}>
            {props.FirstName /* + " " + props.LastName */}
          </span>
        </div>
      </div>
      <div>
        <span className={a.status}>{props.status}</span>
      </div>
      <div>
        <p>
          <span>{/* props.Location.Sity */}</span>
          <span>{/* props.Location.Country */}</span>
        </p>
      </div>
      {props.sub ? (
        <button
          className={a.unfollow + " btn btn-primary btn-sm"}
          onClick={() => props.unfollow(props.UserId)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={a.follow + "btn btn-success btn-sm"}
          onClick={() => props.follow(props.UserId)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default User;
