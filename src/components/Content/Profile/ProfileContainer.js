import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/contentPage-reducer";
import { withRouter } from "react-router-dom";
import { getUserInfoProfile } from "../../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userid = this.props.match.params.userid;
    getUserInfoProfile(userid).then((response) => {
      this.props.setUserProfile(response.data);
      this.props.fetchingAC(false);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let router = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
  return { a: 1 };
};

export default connect(mapStateToProps, { setUserProfile })(router);
