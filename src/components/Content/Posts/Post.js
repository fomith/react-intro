import React from 'react';
import baseAvatar from "../../../image/4.png";
import a from './Post.module.css';

const Post = (props) => {
  return (
    <div className={a.item}>
      <img className={a.avatar} 
       src={baseAvatar}
      alt="Avatar"></img>
      <p className={a.post}> {props.message} </p>
      <div>
        <span>{props.LikesKount} Likes</span>
      </div>
    </div>
  )
};

export default Post;