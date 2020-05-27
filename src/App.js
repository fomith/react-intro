import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { autorizedProccess } from "./redux/contentPage-reducer";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.AuthSync) this.props.autorizedProccess();
  }
  render() {
    if (!this.props.AuthSync) {
      return <Loader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <main>
            <NavbarContainer />
            <content className="content top">
              <Route
                path="/profile/:userid?"
                render={() => <ContentContainer />}
              />
              <Route path="/dialogs/:userid?" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/setting" render={() => <Setting />} />
            </content>
          </main>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  AuthSync: state.contentPage.AuthSync,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { autorizedProccess })
)(App);
