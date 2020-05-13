import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, addusers, newPage, fetchingAC } from "../../redux/UserPage-reducer";

const mapState = (state) => {
  window.state = state;
  return {
    data: state.usersPage.userData,
    totalCount: state.usersPage.totalCount,
    userCountPage: state.usersPage.userCountPage,
    currentPage: state.usersPage.currentPage,
    fetching: state.usersPage.fetching
  };
};

const UsersContainer = connect(mapState, {follow, unfollow, addusers, newPage, fetchingAC})(Users);

export default UsersContainer;
