import React from 'react';
import a from './Textarea.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/contentPage-reducer';

const Textarea = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(postMessage));
  };
  return (
    <div className={a.post}>
      <div className={a.newpost}>
        <h3>My posts</h3>
        <div className={a.flex}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="Введите текст"/>
          <button className={"btn btn-primary" + ' ' + a.btn} onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
};

export default Textarea;