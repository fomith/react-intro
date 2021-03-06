import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import {authMe} from "../../redux/contentPage-reducer"

class LoginContainer extends React.Component {
  render() {
    if (this.props.Auth) return <Redirect to={`/profile/${this.props.Id}`} />;
    return <Login {...this.props}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    Auth: state.contentPage.Auth,
    Id: state.contentPage.Id,
  };
};

export default connect(mapStateToProps, { authMe })(LoginContainer);
