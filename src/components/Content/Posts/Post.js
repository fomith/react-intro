import React from 'react';
import a from './Post.module.css';

const Post = (props) => {
  return (
    <div className={a.item}>
      <img className={a.avatar} src={"./image/" + props.avatar + ".png"} alt="asd"></img>
      <p className={a.post}> {props.message} </p>
      <div>
        <span>{props.LikesKount} Likes</span>
      </div>
    </div>
  )
};

export default Post;