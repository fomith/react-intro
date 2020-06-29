import React, { useState } from "react";
import a from "./Profile.module.css";
import Loader from "../../Loader/Loader";
import baseAvatar from "../../../image/4.png";
import { Field, reduxForm } from "redux-form";

const Profile = (props) => {
  const [statusMode, setStatusModeChange] = useState(0);

  const statusModern = (values) => {
    if (
      values.newStatusText !== props.status &&
      values.newStatusText &&
      values.newStatusText.length > 5
    ) {
      props.changeCurrentStatus(values.newStatusText);
      setStatusModeChange(0);
    }
    setStatusModeChange(0);
  };

  const StatusForm = (values) => {
    return (
      <form onBlur={values.handleSubmit}>
        <Field
          component={"input"}
          className={a.currentStatus}
          name={"newStatusText"}
          autoFocus={true}
          placeholder={props.status}
        />
      </form>
    );
  };

  const StatusFormRedux = reduxForm({ form: "profileStatusForm" })(StatusForm);

  return (
    <div className={a.description}>
      {props.fetching === true || !props.profileData.userId ? (
        <Loader />
      ) : (
        <div className={a.desc}>
          <div className={a.flex}>
            <img
              className={a.img}
              src={
                !props.profileData.photos.large
                  ? baseAvatar
                  : props.profileData.photos.large
              }
              alt="Avatar"
            ></img>

            <div>
              <p className="first_name">{props.profileData.fullName}</p>

              <div>
                {statusMode === 0 || statusMode !== 1 ? (
                  !props.status ? (
                    <span
                      onClick={() =>
                        props.accId === props.profileData.userId
                          ? setStatusModeChange(1)
                          : null
                      }
                      className={a.currentStatus}
                    >
                      Кликни, чтобы добавить статус...
                    </span>
                  ) : (
                    <span
                      onClick={() =>
                        props.accId === props.profileData.userId
                          ? setStatusModeChange(1)
                          : null
                      }
                      className={a.currentStatus}
                    >
                      {props.status}
                    </span>
                  )
                ) : (
                  <StatusFormRedux onSubmit={statusModern} />
                )}
              </div>

              <p className="aboutMe">{props.profileData.aboutMe}</p>
              <p className="city">{props.name}</p>
              <p className="age">{props.name}</p>
            </div>
          </div>
          <div className={a.socialLinks}>
            <div>
              {statusMode === 0 || statusMode !== 2 ? (
                <span
                  onClick={() =>
                    props.accId === props.profileData.userId
                      ? setStatusModeChange(2)
                      : null
                  }
                  className="badge badge-primary"
                >
                  {props.profileData.contacts.facebook + " Link"}
                </span>
              ) : (
                <StatusFormRedux onSubmit={statusModern} />
              )}
            </div>

            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.facebook}
            >
              facebook
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.vk}
            >
              vk
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.website}
            >
              website
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.twitter}
            >
              twitter
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.instagram}
            >
              instagram
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.instagram}
            >
              youtube
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.github}
            >
              github
            </a>
            <a
              className="badge badge-primary"
              href={"https://" + props.profileData.contacts.mainLink}
            >
              mainLink
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
