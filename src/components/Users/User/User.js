import React from "react";
import a from "./user.module.scss";

const User = (props) => {
  return (
    <div className={a.flexC + " " + a.container}>
      <div className={a.flex}>
        <div className={a.colored + ' ' + a.flex}>
          <img
            className={a.avatar}
            src={props.photos.small != null ? props.photos.small : '../image/4.png'}
            alt={props.FirstName}
          ></img>
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
      {props.sub ? <button className={a.button + ' ' + a.unfollow} onClick={() => props.unfollow(props.UserId)}>Unfollow</button> : <button className={a.button + ' ' + a.follow} onClick={() => props.follow(props.UserId)}>Follow</button>}
    </div>
  );
};

export default User;
