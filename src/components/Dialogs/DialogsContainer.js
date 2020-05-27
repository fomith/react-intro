import { connect } from "react-redux";
import { addPost, newText, openDialogData, openMessageData } from "../../redux/dialogPage-reducer";
import Dialogs from "./Dialogs";
import { NotVerification } from "../../Redirect/NotVerificationHOK";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText,
    authorPostID: state.contentPage.Id,
    profileData: state.contentPage.profileData,

  };
};

const DialogsContainer = NotVerification(connect(mapStateToProps, { addPost, newText, openDialogData, openMessageData })(Dialogs));

export default DialogsContainer;
