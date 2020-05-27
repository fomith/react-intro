import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  changeCurrentStatus,
  getUser,
} from "../../../redux/contentPage-reducer";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.userid);
  }
  componentDidUpdate() {
    if (
      this.props.profileData.userId !== parseInt(this.props.match.params.userid)
    ) {
      this.props.getUser(this.props.match.params.userid);
    }
  }

  render() {
    if (this.props.match.params.userid > 0) {
      return <Profile {...this.props} />;
    } else return <Redirect to={"/users/"} />;
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.contentPage.currentStatus,
    accId: state.contentPage.Id,
  };
};

export default connect(mapStateToProps, {
  changeCurrentStatus,
  getUser,
})(withRouter(ProfileContainer));
