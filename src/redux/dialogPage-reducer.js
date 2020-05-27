import { openedDialogs, openedDialogsChatting } from "../api/api";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_TEXT_MESSAGE_POST = "CHANGE-TEXT-MESSAGE-POST";
const ADD_DIALOGS_BD = "ADD_DIALOGS_BD";
const ADD_MESSAGES_BD = "ADD_MESSAGES_BD";

let initState = {
  dialogsData: [],
  messageData: [],
  newMessageText: "",
};

const dialogPageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: state.messageData.length + 1,
        body: action.message,
        translatedBody: null,
        addedAt: "2020-05-14T09:44:05.853",
        senderId: action.authorID,
        senderName: "Matthew",
        recipientId: 8061,
        viewed: true,
      };
      let stateCopy = { ...state };
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case CHANGE_TEXT_MESSAGE_POST: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.message;
      return stateCopy;
    }
    case ADD_DIALOGS_BD: {
      return {
        ...state,
        dialogsData: action.data,
      };
    }
    case ADD_MESSAGES_BD: {
      return {
        ...state,
        messageData: action.data,
      };
    }
    default:
      return state;
  }
};

export const addPost = (message, authorID) => ({
  type: ADD_MESSAGE,
  message,
  authorID,
});

export const newText = (text) => ({
  type: CHANGE_TEXT_MESSAGE_POST,
  message: text,
});
export const openDialogData = () => {
  return (dispatch) => {
    openedDialogs().then((response) => {
      if (response.data.length > 0) {
        dispatch({
          type: ADD_DIALOGS_BD,
          data: response.data,
        });
      }
    });
  };
};

export const openMessageData = (id) => {
  return (dispatch) => {
    openedDialogsChatting(id).then((response) => {
      if (response.data.totalCount > 0) {
        dispatch({
          type: ADD_MESSAGES_BD,
          data: response.data.items,
        });
      }
    });
  };
};

export default dialogPageReducer;
