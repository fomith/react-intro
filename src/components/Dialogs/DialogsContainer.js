import { connect } from "react-redux";
import { addPost, newText } from "../../redux/dialogPage-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = connect(mapStateToProps, { addPost, newText })(Dialogs);

export default DialogsContainer;
