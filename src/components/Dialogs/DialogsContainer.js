import { connect } from "react-redux";
import { addPost, newText } from "../../redux/dialogPage-reducer";
import Dialogs from "./Dialogs";
import { NotVerification } from "../../Redirect/NotVerificationHOK";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText,
    authorPostID: state.contentPage.Id

  };
};

const DialogsContainer = NotVerification(connect(mapStateToProps, { addPost, newText })(Dialogs));

export default DialogsContainer;
