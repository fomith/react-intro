import React from "react";
import a from "./Textarea.module.css";
import { Field, reduxForm } from "redux-form";

const Textarea = (props) => {
  return (
    <div className={a.post}>
      <div className={a.newpost}>
        <h3>My posts</h3>
        <TextareaRedux onSubmit={props.addPost} />
      </div>
    </div>
  );
};

const TextareaForm = (props) => {
  return (
    <form className={a.flex} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newPostElement"
        placeholder="Введите текст"
      />
      <button onSubmit={props.reset}  className={"btn btn-primary " + a.btn}>Add post</button>
    </form>
  );
};

const TextareaRedux = reduxForm({ form: "profilePageMessage" })(TextareaForm);

export default Textarea;
