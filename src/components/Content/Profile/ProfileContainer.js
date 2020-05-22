import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  addCurrentStatus,
  changeCurrentStatus,
} from "../../../redux/contentPage-reducer";
import { withRouter } from "react-router-dom";
import { getUserInfoProfile, lookingStatus } from "../../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    getUserInfoProfile(this.props.match.params.userid).then((response) => {
      this.props.setUserProfile(response.data);
      this.props.fetchingAC(false);
      lookingStatus(this.props.match.params.userid).then((response) => {
        this.props.addCurrentStatus(response.data);
      });
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.contentPage.currentStatus,
    accId: state.contentPage.Id 
  };
};

export default connect(mapStateToProps, { setUserProfile, addCurrentStatus, changeCurrentStatus })(
  withRouter(ProfileContainer)
);
