import React from 'react';
import a from './Message.module.css';
import baseAvatar from "../../../image/4.png";


const Message = (props) => {
  return (
    <div className={a.message}>
      <img className={a.avatar} 
      src={baseAvatar} 
      alt="asd"></img>
      <p className={a.messageText}>{props.message}</p>
    </div>
  )
}

export default Message;