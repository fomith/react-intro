import React from "react";
import a from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { TextareaCustom } from "../utilits/CustomForms/CustomForms";
import {
  required,
  maxLength70,
} from "../utilits/validationForms/ValidationForms";

const Dialogs = (props) => {
  let dialogs = props.dialogsData.map((d) => (
    <Dialog name={d.name} id={d.id} key={d.id} />
  ));
  let messages = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} key={m.postId} />
  ));

  let addPost = (data) => {
    props.addPost(data.message, props.authorPostID);
  };

  return (
    <div className={a.dialogs}>
      <div className={a.dialogs_items}>{dialogs}</div>
      <div className={a.messages_item}>
        {messages}
        <div className={a.textareaPosition}>
          <DialogMessageRedux onSubmit={addPost} />
        </div>
      </div>
    </div>
  );
};

const DialogMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextareaCustom}
        name="message"
        placeholder="Введите текст"
        validate={[required, maxLength70]}
      />
    </form>
  );
};

const DialogMessageRedux = reduxForm({ form: "dialogMessageForm" })(
  DialogMessage
);

export default Dialogs;
