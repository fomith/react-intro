import Axios from "axios";

export const getUserInfoProfile = (userid) => {
  if (!userid) {
    userid = 2;
  }
  return Axios.get(
    `https://social-network.samuraijs.com/api/1.0/profile/` + userid,
    {
      withCredentials: true,
    }
  );
};

export const authMeAPI = () => {
  return Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true,
  });
};

export const openUsers = (page) => {
  return Axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${page}`,
    {
      withCredentials: true,
    }
  );
};
