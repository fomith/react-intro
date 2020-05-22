import React from "react";
import a from "./Textarea.module.css";
import { Field, reduxForm } from "redux-form";
import { TextareaCustom } from "../../utilits/CustomForms/CustomForms";
import { maxLength70, required, minLength3 } from "../../utilits/validationForms/ValidationForms";

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
    <form onSubmit={props.handleSubmit}>
      <Field
        type="text"
        component={TextareaCustom}
        name="newPostElement"
        placeholder="Введите текст"
        validate={[required, maxLength70, minLength3]}
      />
    </form>
  );
};

const TextareaRedux = reduxForm({ form: "profilePageMessage" })(TextareaForm);

export default Textarea;
