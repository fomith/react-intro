import React from "react";
import a from "./user.module.scss";
import { NavLink } from "react-router-dom";
import { unFollowingUser, followingUser } from "../../../api/api";

const User = (props) => {
  const followAction = () => {
    props.waitingFollowingAC(props.UserId);
    followingUser(props.UserId).then((response) => {
      if (response.data.resultCode === 0) {
        props.follow(props.UserId);
        props.waitingEndAC(props.UserId);
      }
    });
  };

  const unfollowAction = () => {
    props.waitingFollowingAC(props.UserId);
    unFollowingUser(props.UserId).then((response) => {
      if (response.data.resultCode === 0) {
        props.unfollow(props.UserId);
        props.waitingEndAC(props.UserId);
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
          disabled={props.wait.some((x) => x === props.UserId)}
          className={a.unfollow + " btn btn-primary btn-sm"}
          onClick={() => unfollowAction(props.UserId)}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.wait.some((x) => x === props.UserId)}
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
