import Axios from "axios";

export const getUserInfoProfile = (userid) => {
  let localUserId = userid;
  if (localUserId < 2 || localUserId === undefined) {
    localUserId = 2;
  }
  return Axios.get(
    `https://social-network.samuraijs.com/api/1.0/profile/${userid}`,
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

export const followingUser = (UserId) => {
  return Axios.post(
    `https://1social-network.samuraijs.com/api/1.0/follow/${UserId}`,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": "659b1504-69db-4c99-b3b8-3bafd59cf7ce",
      },
    }
  );
};
export const unFollowingUser = (UserId) => {
  Axios.delete(
    `https://1social-network.samuraijs.com/api/1.0/follow/${UserId}`,
    {
      withCredentials: true,
      headers: {
        "API-KEY": "659b1504-69db-4c99-b3b8-3bafd59cf7ce",
      },
    }
  );
};
