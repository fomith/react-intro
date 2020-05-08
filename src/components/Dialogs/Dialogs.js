import React from 'react';
import a from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogs = props.dialogsData.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);
  let messages = props.messageData.map(m => <Message message={m.message} id={m.id} key={m.postId} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    props.newText(postMessage);
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
        value={props.newMessageText} 
        placeholder="Введите текст"></textarea>
        <button className={"btn btn-primary " + a.btn} onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;