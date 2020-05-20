import Content from "./Content";
import { connect } from "react-redux";
import { setData, updText, fetchingAC } from "../../redux/contentPage-reducer";

const mapStateToProps = (state) => {
  return {
    postsData: state.contentPage.postsData,
    newText: state.contentPage.newPostText,
    profileData: state.contentPage.profileData,
    fetching: state.contentPage.fetching
  };
};

const ContentContainer = connect(mapStateToProps, {setData, updText, fetchingAC})(Content);

export default ContentContainer;
