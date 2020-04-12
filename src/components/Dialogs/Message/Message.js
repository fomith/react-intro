import React from 'react';
import a from './Message.module.css';

const Message = (props) => {
  return (
    <div className={a.message}>
      <img className={a.avatar} src={"../image/" + props.id + ".png"} alt="asd"></img>
      <p>{props.message}</p>
    </div>
  )
}

export default Message;