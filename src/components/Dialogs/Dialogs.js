import React from 'react';
import a from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/dialogPage-reducer';

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
  let messages = props.state.messageData.map(m => <Message message={m.message} id={m.id} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
  
    props.dispatch(onMessageChangeActionCreator(postMessage));
  };
  return (
    <div className={a.dialogs}>
      <div className={a.dialogs_items}>
        {dialogs}
      </div>
      <div className={a.messages_item}>
        {messages}

        <div className={a.textareaPosition}>
        <textarea onChange={onPostChange} 
        ref={newPostElement} 
        value={props.state.newMessageText} 
        placeholder="Введите текст"></textarea>
        <button className={"btn btn-primary" + ' ' + a.btn} onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;