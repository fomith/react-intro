import React from 'react';
import a from './Content.module.css';
import Profile from './Profile/Profile';
import Textarea from './Textarea/Textarea';
import Post from './Posts/Post';

const Content = (props) => {
  let postsElement = props.state.postsData.map(p => {
    if (p.userId === props.userId) {
    return  <Post message={p.message} LikesKount={p.LikesKount} avatar={p.userId} />
    }
  });
  return (
    <div>
      <img className={a.img} src="https://avatars.mds.yandex.net/get-pdb/231404/e086afcb-27e6-433b-bed5-4f3b83d2d4f9/s1200?webp=false" alt="sdf" />
      <Profile userId={props.userId} name={props.name} lastName={props.lastName} avatar={props.avatar}  />
      <Textarea dispatch={props.dispatch} newPostText={props.state.newPostText} />
      {postsElement}
    </div>
  )
};

export default Content;