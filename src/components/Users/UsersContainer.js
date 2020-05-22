import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {  follow,  unfollow,  newPage,  waitingFollowingAC,  waitingEndAC,  openUsersThunk,} from "../../redux/UserPage-reducer";
import { NotVerification } from "../../Redirect/NotVerificationHOK";

class ContainerLocal extends React.Component {
componentDidMount() {
  if (this.props.data.length === 0) {
    this.props.openUsersThunk(this.props.currentPage);
  }
}
  render() {
    return <Users {...this.props} />;
  }
}







const mapState = (state) => {
  return {
    data: state.usersPage.userData,
    totalCount: state.usersPage.totalCount,
    userCountPage: state.usersPage.userCountPage,
    currentPage: state.usersPage.currentPage,
    fetching: state.usersPage.fetching,
    wait: state.usersPage.waitingFollowing,
  };
};



const UsersContainer = NotVerification(connect(mapState, {
  follow,
  unfollow,
  newPage,
  waitingFollowingAC,
  waitingEndAC,
  openUsersThunk,
})(ContainerLocal));

export default UsersContainer;
