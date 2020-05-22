import React from "react";
import a from "./CustomForms.module.scss";

export const TextareaCustom = ({
  input,
  meta: { touched, error },
  ...props
}) => {
  return (
    <>
      <div className={a.flex}>
        <textarea type={props.type} {...input} placeholder={props.placeholder}></textarea>
        <button className={"btn btn-primary " + a.btn}>
          Add post
        </button>
      </div>
      {touched && error ? <span className={a.errorSpan}>{error}</span> : null}
    </>
  );
};

export const TextareaCustomLogin = ({
    input,
    meta: { touched, error },
    ...props
  }) => {
    return (
      <>
        <div className={a.flex}>
          <input type={props.type} {...input} placeholder={props.placeholder}></input>
        </div>
        {touched && error ? <span className={a.errorSpan}>{error}</span> : null}
      </>
    );
  };
  