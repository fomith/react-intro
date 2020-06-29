import { connect } from "react-redux";
import Header from "./Header";
import { endSession, newMessageCount } from "../../redux/contentPage-reducer";



const HeaderContainer = (state) => {
  return {
    Login: state.contentPage.Login,
    Id: state.contentPage.Id,
    Email: state.contentPage.Email,
    newMessages: state.contentPage.newMessageCount
  };
};

export default connect(HeaderContainer, { endSession, newMessageCount })(Header);
