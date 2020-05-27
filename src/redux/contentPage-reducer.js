import {
  ChangeStatusAPI,
  logingAPI,
  authMeAPI,
  logOut,
  NewMessageIcon,
  lookingStatus,
  getUserInfoProfile,
} from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const CHANGE_TEXT_NEW_POST = "CHANGE-TEXT-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const FETCHING = "FETCHING";
const AUTH = "AUTH";
const ADD_CURRENT_STATUS = "ADD_CURRENT_STATUS";
const MESSAGE_COUNT = "MESSAGE_COUNT";

let initState = {
  newMessageCount: null,
  AuthSync: false,
  Auth: false,
  Id: 0,
  Login: "",
  Email: "",
  currentStatus: "",
  profileDataMe: [],
  profileData: [],
  fetching: true,
  userData: [{ userId: 1, name: "Дмитрий ", lastName: "Фамильян", avatar: 2 }],
  postsData: [
    { id: 1, message: "GПsdривет ", LikesKount: 17, userId: 2 },

    {
      id: 4,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores iste aliquid veniam sed nihil provident dignissimos cum nam? Dignissimos adipisci ratione sit odio quasi deserunt doloremque corrupti soluta nesciunt, eum provident maxime iste voluptate totam. Natus eum nemo, aliquid asperiores, error harum voluptates consequuntur, cupiditate aliquam non sit officiis incidunt ullam sint ut! Eius quidem quis nulla provident ab sint ducimus molestias facere possimus cum aliquam sit, asperiores cumque hic suscipit obcaecati autem assumenda. Placeat vero fuga quia inventore totam, voluptatem voluptatum, nam quis laudantium vel aspernatur quas dolorum pariatur recusandae non. Tenetur, ipsum omnis accusantium ullam voluptatum debitis?",
      LikesKount: 17,
      userId: 1,
    },
    { id: 5, message: "GПривет", LikesKount: 77, userId: 1 },
    { id: 6, message: "asdasdasdasd", LikesKount: 99, userId: 1 },
  ],
  newPostText: "",
};

const contentPageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        message: action.text.newPostElement,
        LikesKount: 0,
        userId: state.Id,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.unshift(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case CHANGE_TEXT_NEW_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.message;
      return stateCopy;
    }

    // TODO Выборка
    case SET_USER_PROFILE: {
      if (state.Id === action.data.userId && state.profileDataMe.length === 0) {
        return {
          ...state,
          profileData: action.data,
          profileDataMe: action.data,
          fetching: false,
          currentStatus: action.status,
        };
      } else {
        return {
          ...state,
          profileData: action.data,
          fetching: false,
          currentStatus: action.status,
        };
      }
    }

    case MESSAGE_COUNT:
      return { ...state, newMessageCount: action.count };

    case FETCHING:
      return { ...state, fetching: action.fetching };

    case ADD_CURRENT_STATUS:
      return { ...state, currentStatus: action.text };

    case AUTH: {
      let AuthStatus = false;
      if (action.id > 0) {
        AuthStatus = true;
      }
      let statusProfile = "";
      if (statusProfile !== "") {
        statusProfile = action.status;
      }
      return {
        ...state,
        Id: action.id,
        Login: action.login,
        Email: action.email,
        Auth: AuthStatus,
        currentStatus: statusProfile,
        AuthSync: true,
      };
    }

    default:
      return state;
  }
};

export const setData = (text) => ({ type: ADD_POST, text });

// TODO get user

export const getUser = (data) => {
  return (dispatch) => {
    getUserInfoProfile(data)
      .then((response) => {
        lookingStatus(data).then((resp) => {
          dispatch({
            type: SET_USER_PROFILE,
            data: response.data,
            status: resp.data,
          });
        });
      })
      .then(() => {
        return true;
      });
  };
};

export const fetchingAC = (fetching) => ({ type: FETCHING, fetching });

export const auth = (data) => ({
  type: AUTH,
  id: data.id,
  login: data.login,
  email: data.email,
});

export const addCurrentStatus = (text) => ({ type: ADD_CURRENT_STATUS, text });

export const changeCurrentStatus = (text) => {
  return (dispatch) => {
    ChangeStatusAPI(text).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch({
          type: ADD_CURRENT_STATUS,
          text,
        });
      } else
        dispatch({
          type: ADD_CURRENT_STATUS,
          text: "Как бы там ни было - статус не был обновлен!!!!",
        });
    });
  };
};

export const authMe = (data) => {
  return (dispatch) => {
    logingAPI(data).then((result) => {
      if (result.data.resultCode === 0) {
        authMeAPI().then((response) => {
          dispatch({
            type: AUTH,
            id: response.data.data.id,
            login: response.data.data.login,
            email: response.data.data.email,
          });
        });
      } else
        dispatch(stopSubmit("logingForm", { _error: result.data.messages[0] }));
    });
  };
};

export const endSession = () => {
  return (dispatch) => {
    logOut().then((response) => {
      dispatch({
        type: AUTH,
        id: null,
        login: null,
        email: null,
      });
    });
  };
};

export const updText = (text) => ({
  type: CHANGE_TEXT_NEW_POST,
  message: text,
});

export const autorizedProccess = () => {
  return (dispatch) => {
    let AuthInfo = "null";
    let statusInfo = "null";
    authMeAPI()
      .then((response) => {
        AuthInfo = response.data.data;
        return response;
      })
      .then((response) => {
        lookingStatus(response.data.data.id)
          .then(({ data }) => {
            statusInfo = data;
          })
          .then(() => {
            dispatch({
              type: AUTH,
              id: AuthInfo.id,
              login: AuthInfo.login,
              email: AuthInfo.email,
              status: statusInfo,
            });
          });
      });
  };
};

export const newMessageCount = () => {
  return (dispatch) => {
    NewMessageIcon().then((response) => {
      return dispatch({
        type: MESSAGE_COUNT,
        count: response.data,
      });
    });
  };
};

export default contentPageReducer;
