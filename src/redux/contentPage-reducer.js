import { ChangeStatusAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_TEXT_NEW_POST = "CHANGE-TEXT-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const FETCHING = "FETCHING";
const AUTH = "AUTH";
const ADD_CURRENT_STATUS = "ADD_CURRENT_STATUS";

let initState = {
  Auth: false,
  Id: 0,
  Login: "",
  Email: "",
  currentStatus: "",
  profileData: [],
  fetching: true,
  userData: [
    { userId: 1, name: "Дмитрий ", lastName: "Фамильян", avatar: 2 },
    { userId: 2, name: "Ваня", lastName: "Куцен", avatar: 1 },
    { userId: 3, name: "Валя", lastName: "Икар", avatar: 1 },
    { userId: 4, name: "Зина", lastName: "Макар", avatar: 1 },
    { userId: 5, name: "GПривет", lastName: "ЙоЙё", avatar: 1 },
    { userId: 6, name: "asdasdasdasd", lastName: "asd", avatar: 1 },
  ],
  postsData: [
    { id: 1, message: "GПsdривет ", LikesKount: 17, userId: 2 },
    { id: 2, message: "Как дела?", LikesKount: 0, userId: 4 },
    { id: 3, message: "Тестовая запись", LikesKount: 22, userId: 1 },
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
    case SET_USER_PROFILE:
      return { ...state, profileData: action.data };

    case FETCHING:
      return { ...state, fetching: action.fetching };

    case ADD_CURRENT_STATUS:
      return { ...state, currentStatus: action.text };

    case AUTH: {
      let AuthStatus = false;
      if (action.id > 0) {
        AuthStatus = true;
      }
      return {
        ...state,
        Id: action.id,
        Login: action.login,
        Email: action.email,
        Auth: AuthStatus,
      };
    }

    default:
      return state;
  }
};

export const setData = (text) => ({ type: ADD_POST, text });

export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data });

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

export const updText = (text) => ({
  type: CHANGE_TEXT_NEW_POST,
  message: text,
});

export default contentPageReducer;
