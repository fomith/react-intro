import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const NotVerification = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.AuthStatus) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let mapState = (state) => {
    return { AuthStatus: state.contentPage.Auth };
  };

  const RedirectConnect = connect(mapState, {})(RedirectComponent);

  return RedirectConnect;
};
