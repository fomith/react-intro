import React from "react";
import a from "./user.module.scss";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const User = (props) => {
  const followAction = () => {
    Axios.post(
      `https://social-network.samuraijs.com/api/1.0//follow/2`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "a0021633-62e0-4d99-afaa-7424d154129f",
        },
      }
    ).then((response) => {
      debugger
      if (response.data.resultCode === 0) {
        props.follow(props.UserId);
      }
    });
  };

  const unfollowAction = () => {
    debugger
    Axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/2`, {
      withCredentials: true,
      headers: {
        "API-KEY": "a0021633-62e0-4d99-afaa-7424d154129f",
      },
    }).then((response) => {
      if (response.data.resultCode === 0) {
        props.unfollow(props.UserId);
      }
    });
  };

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
          onClick={() => unfollowAction(props.UserId)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={a.follow + "btn btn-success btn-sm"}
          onClick={() => followAction(props.UserId)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default User;
