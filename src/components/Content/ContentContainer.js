import Content from "./Content";
import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator } from "../../redux/contentPage-reducer";

const mapStateToProps = (state) => {
  return {
    postsData: state.contentPage.postsData,
    newText: state.contentPage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setData: () => dispatch(addPostActionCreator()),
    updText: (text) => dispatch(onPostChangeActionCreator(text)),
  };
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
