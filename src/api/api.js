import Axios from "axios";

const apiBase = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "4e3741cd-d116-4586-83ab-451c4769bf3c",
  },
});
const apiBase1 = Axios.create({
  baseURL: "https://1social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "4e3741cd-d116-4586-83ab-451c4769bf3c",
  },
});

export const getUserInfoProfile = (userid) => {
  if (userid > 1) {
    return apiBase.get(`profile/${userid}`);
  }
  return apiBase.get(`profile/`);
  
};

export const authMeAPI = () => {return apiBase.get(`auth/me`)};
export const openUsers = (page) => {return apiBase.get(`users?page=${page}`)};
export const followingUser = (UserId) => {return apiBase1.post(`follow/${UserId}`)};
export const unFollowingUser = (UserId) => {return apiBase1.delete(`follow/${UserId}`)};
export const lookingStatus = (UserId) => {return apiBase.get(`profile/status/${UserId}`)};
export const ChangeStatusAPI = (status) => {return apiBase.put(`profile/status/`, {status})};
export const logingAPI = ({email, password, rememberMe = false}) => {return apiBase.post(`auth/login`, {email, password, rememberMe}) };
export const logOut = () => {return apiBase.delete(`auth/login`)};


// TODO  * API for work dialogs 
export const NewMessageIcon = () => {return apiBase.get(`dialogs/messages/new/count`)};

// TODO  * Opened dialogs
export const openedDialogs = () => {return apiBase.get(`dialogs/`)};

// TODO  * start chatting, refresh your companion so that he was on top
export const openedDialogsChatting = (id) => {return apiBase.get(`/dialogs/${id}/messages/`)};
