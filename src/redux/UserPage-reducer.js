import { openUsers } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const ADDUSERS = "ADDUSERS";
const NEW_PAGE = "NEW_PAGE";
const FETCHING = "FETCHING";
const WAIT = "WAIT";
const WAIT_END = "WAIT_END";

let initState = {
  userData: [],
  fetching: true,
  totalCount: 0,
  userCountPage: 0,
  currentPage: 1,
  waitingFollowing: [8238],
};

const UserPageReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = { ...state };
      stateCopy.userData = [...state.userData];
      stateCopy.userData.filter((a) => {
        if (a.id === action.id) {
          a.followed = !a.followed;
          return a;
        }
        return a;
      });
      return stateCopy;
    }
    case UNFOLLOW: {
      let stateCopy = { ...state };
      stateCopy.userData = [...state.userData];
      stateCopy.userData.filter((a) => {
        if (a.id === action.id) {
          a.followed = !a.followed;
          return a;
        }
        return a;
      });
      return stateCopy;
    }
    case ADDUSERS: {
      return { 
        ...state,
        userData: action.id.data.items,
        totalCount: action.id.data.totalCount,
        userCountPage: 10,
      };
    }
    case NEW_PAGE: {
      let stateCopy = { ...state };
      stateCopy.currentPage = action.id;
      return stateCopy;
    }
    case FETCHING: {
      let stateCopy = { ...state };
      stateCopy.fetching = action.id;
      return stateCopy;
    }
    case WAIT: {
      let stateCopy = {
        ...state,
        waitingFollowing: [...state.waitingFollowing],
      };
      stateCopy.waitingFollowing.push(action.id);
      return stateCopy;
    }
    case WAIT_END: {
      let stateCopy = { ...state };
      stateCopy.waitingFollowing = stateCopy.waitingFollowing.filter(
        (x) => x !== action.id
      );
      return stateCopy;
    }
    default:
      return state;
  }
};

export const follow = (text) => ({
  type: FOLLOW,
  id: text,
});

export const unfollow = (text) => ({
  type: UNFOLLOW,
  id: text,
});

export const addusers = (text) => ({
  type: ADDUSERS,
  id: text,
});
export const newPage = (text) => ({
  type: NEW_PAGE,
  id: text,
});
export const fetchingAC = (text) => ({
  type: FETCHING,
  id: text,
});
export const waitingFollowingAC = (text) => ({
  type: WAIT,
  id: text,
});
export const waitingEndAC = (text) => ({
  type: WAIT_END,
  id: text,
});

export const openUsersThunk = (currentPage) => {
  return (dispatch) => {
    dispatch(fetchingAC(true));
    openUsers(currentPage).then((response) => {
      dispatch(addusers(response));
      dispatch(fetchingAC(false));
      dispatch(newPage(currentPage))
    });
  };
};

export default UserPageReducer;
