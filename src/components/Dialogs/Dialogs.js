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
import { withRouter } from "react-router-dom";

const Dialogs = (props) => {
  if (props.dialogsData.length === 0) {
    props.openDialogData();
  }

  if (props.match.params.userid && props.messageData.length === 0) {
    props.openMessageData(props.match.params.userid);
  }

  let dialogs = "";
  if (props.dialogsData.length > 0) {
    dialogs = props.dialogsData.map((d) => (
      <Dialog name={d.userName} id={d.id} photos={d.photos.small} newMessagesCount={d.newMessagesCount} key={d.id} />
    ));
  }

   // TODO Добавляем сообщения
  let messages = props.messageData.map((m) => (
    <Message authorPostID={props.authorPostID} profileData={props.profileData} Author={props.dialogsData.filter(x => m.senderId === x.id )} message={m.body} senderId={m.senderId} key={m.id} />
  ));

  let addPost = (data) => {
    props.addPost(data.message, props.authorPostID);
  };

  return (
    <div className={a.dialogs}>
      <div className={a.dialogs_items}>
        {props.dialogsData ? dialogs : null}
      </div>
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

export default withRouter(Dialogs);
