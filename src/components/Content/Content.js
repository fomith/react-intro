import React from 'react';
import a from './Content.module.css';
import Textarea from './Textarea/Textarea';
import Post from './Posts/Post';
import ProfileContainer from './Profile/ProfileContainer';

const Content = (props) => {
  let postsElement = props.postsData.map(p => {
    return  <Post message={p.message} LikesKount={p.LikesKount} avatar={p.userId} key={p.id} />
  });
  return (
    <div>
      <img className={a.img} src="https://avatars.mds.yandex.net/get-pdb/231404/e086afcb-27e6-433b-bed5-4f3b83d2d4f9/s1200?webp=false" alt="sdf" />
      <ProfileContainer {...props} />
      <Textarea updText={props.updText} newPostText={props.newText} addPost={props.setData}/>
      {postsElement}
    </div>
  )
};

export default Content;