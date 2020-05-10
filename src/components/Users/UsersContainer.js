import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, addusers, newPage, fetching } from "../../redux/UserPage-reducer";

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
const mapDispatch = (dispatch) => {
  return {
    follow: (text) => dispatch(follow(text)),
    unfollow: (text) => dispatch(unfollow(text)),
    addusers: (text) => dispatch(addusers(text)),
    newPage: (text) => dispatch(newPage(text)),
    fetchingAC: (text) => dispatch(fetching(text))
  };
};

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;
