import { connect } from "react-redux";
import Header from "./Header";
import { auth, endSession } from "../../redux/contentPage-reducer";

const HeaderContainer = (state) => {
  return {
    Login: state.contentPage.Login,
    Id: state.contentPage.Id,
    Email: state.contentPage.Email,
  };
};

export default connect(HeaderContainer, { auth, endSession })(Header);
