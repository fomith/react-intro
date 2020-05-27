import React from "react";
import a from "./Message.module.css";
import baseAvatar from "../../../image/4.png";
import Loader from "../../Loader/Loader";

const Message = (props) => {

  if (props.Author.length === 0) {
    return <Loader />;
  } else {

    if (props.authorPostID === props.senderId) {

    }



    return (
      <div className={a.message}>
        <img
          className={a.avatar}
          src={
            props.Author[0].photos.small
              ? props.Author[0].photos.small
              : baseAvatar
          }
          alt="asd"
        ></img>
        <p className={a.messageText}>{props.message}</p>
      </div>
    );
  }
};

export default Message;
