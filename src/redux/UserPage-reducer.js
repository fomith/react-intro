const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const ADDUSERS = "ADDUSERS";
const NEW_PAGE = "NEW_PAGE";
const FETCHING = "FETCHING";

let initState = {
  userData: [],
  fetching: true,
  totalCount: 0,
  userCountPage: 0,
  currentPage: 1,
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
      let stateCopy = { ...state };
      stateCopy.userData = action.id.data.items;
      stateCopy.totalCount = action.id.data.totalCount;
      stateCopy.userCountPage = 10;
      return stateCopy;
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
export default UserPageReducer;
