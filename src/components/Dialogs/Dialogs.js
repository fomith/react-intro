import React from "react";
import a from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogs = props.dialogsData.map((d) => (
    <Dialog name={d.name} id={d.id} key={d.id} />
  ));
  let messages = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} key={m.postId} />
  ));

  let addPost = (data) => {
    props.addPost(data.message);
  };

  return (
    <div className={a.dialogs}>
      <div className={a.dialogs_items}>{dialogs}</div>
      <div className={a.messages_item}>
        {messages}

        <div className={a.textareaPosition}>
          <DialogMessageRedux onSubmit={addPost} />
          {/*   <textarea onChange={onPostChange} 
        ref={newPostElement} 
        value={props.newMessageText} 
        placeholder="Введите текст"></textarea>
        <button className={"btn btn-primary " + a.btn} onClick={addPost}>Add post</button> */}
        </div>
      </div>
    </div>
  );
};

const DialogMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="message" placeholder="Введите текст" />
      <button type="submit" className={"btn btn-primary " + a.btn}>
        Add post
      </button>
    </form>
  );
};

const DialogMessageRedux = reduxForm({ form: "dialogMessageForm" })(
  DialogMessage
);

export default Dialogs;
