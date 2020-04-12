import React from 'react';
import a from './Profile.module.css';

const Profile = (props) => {
  let avatar = "../image/" + props.userId + ".png";
  return (
    <div className={a.description}>
     <img className={a.img} src={avatar}  alt="asd"></img>
      <div className={a.desc}>
        <div>
          <p className="first_name">{props.name}</p>
          <p className="last_name">{props.lastName}</p>
          <p className="city">{props.name}</p>
          <p className="age">{props.name}</p>
        </div>
      </div>
    </div>
  )
};

export default Profile;