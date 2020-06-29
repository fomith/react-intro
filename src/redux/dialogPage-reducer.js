import { openedDialogs, openedDialogsChatting, sendMessage } from "../api/api";

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
      debugger
      let stateCopy = { ...state };
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push(action.data.message);
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

export const addPost = (message, authorID) => {
  return (dispatch) => {
    sendMessage(message, authorID).then((response) => {
      debugger
      if (response.data.resultCode === 0) {
        dispatch({
          type: ADD_MESSAGE,
          data: response.data.data,
        });
      } 
    });
  };
};

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
