import React from "react";
import a from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={a.flexCA}>
      <div className={a.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
