import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow } from "../../redux/UserPage-reducer";

const mapState = (state) => {
  return {
    data: state.usersPage.userData
  };
};
const mapDispatch = (dispatch) => {
  return {
      follow: (text) => dispatch(follow(text)),
      unfollow: (text) => dispatch(unfollow(text))
  };
};

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;
