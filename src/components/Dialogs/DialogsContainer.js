import {
  onMessageChangeActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogPage-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  debugger
return {
  addPost: () => dispatch(addMessageActionCreator()),
  newText: (text) => dispatch(onMessageChangeActionCreator(text)),
}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
