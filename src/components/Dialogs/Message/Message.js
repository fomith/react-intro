import React, { useState } from "react";
import a from "./Message.module.css";
import baseAvatar from "../../../image/4.png";
import { vivedOrNo } from "../../../api/api";

const Message = (props) => {
  const [vived, setVived] = useState(false);

  if (props.senderId === props.authorPostID) {
    vivedOrNo(props.messageId).then((response) => {
      setVived(response.data);
    });

    return (
      <div className={a.message}>
        <p className={vived ? a.messageText : a.messageTextNew}>
          {props.message}
        </p>
        <img className={a.avatar} src={baseAvatar} alt="YOU"></img>
      </div>
    );
  } else {
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
