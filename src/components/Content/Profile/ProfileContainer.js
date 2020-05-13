import React from "react";
import Axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/contentPage-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger
    let userid = this.props.match.params.userid
     if (!this.props.match.params.userid) {userid = 2}
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid).then(
      (response) => {
        this.props.setUserProfile(response.data);
        this.props.fetchingAC(false)
      }
    );
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let router = withRouter(ProfileContainer)

let mapStateToProps = (state) => {
  return {a:1};
};

export default connect(mapStateToProps, { setUserProfile })(router);
