import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const NavbarContainer = (props) => {

  return <Navbar id={props.id} />;
};

const mapStateToProps = (state) => {
  return {
    id: state.contentPage.Id,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {})
)(NavbarContainer);
