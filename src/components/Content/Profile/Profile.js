import React from "react";
import a from "./Profile.module.css";
import Loader from "../../Loader/Loader";

const Profile = (props) => {
  return (
    <div className={a.description}>
      {props.fetching === true 
      ? <Loader /> 
      : (
        <div className={a.desc}>
          <img className={a.img} src={props.profileData.photos.large} alt="asd"></img>
          <div>
            <p className="first_name">{props.profileData.fullName}</p>
            <p className="last_name">{props.profileData.aboutMe}</p>
            <p className="city">{props.name}</p>
            <p className="age">{props.name}</p>
            <div>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.facebook}>facebook</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.vk}>vk</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.website}>website</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.twitter}>twitter</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.instagram}>instagram</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.instagram}>youtube</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.github}>github</a>
              <a className="badge badge-primary" href={"https://" + props.profileData.contacts.mainLink}>mainLink</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
