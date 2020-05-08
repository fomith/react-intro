import React from "react";
import a from "./user.module.scss";

const User = (props) => {
  return (
    <div className={a.flex}>
      <div>avatar</div>
      <div>status</div>
      <div>Location</div>
    </div>
  );
};

export default User;
