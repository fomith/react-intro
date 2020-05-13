import Content from "./Content";
import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator, fetchingAC } from "../../redux/contentPage-reducer";

const mapStateToProps = (state) => {
  return {
    postsData: state.contentPage.postsData,
    newText: state.contentPage.newPostText,
    profileData: state.contentPage.profileData,
    fetching: state.contentPage.fetching
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setData: () => dispatch(addPostActionCreator()),
    updText: (text) => dispatch(onPostChangeActionCreator(text)),
    fetchingAC: (text) => dispatch(fetchingAC(text))
  };
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
