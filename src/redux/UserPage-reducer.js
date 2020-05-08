const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const ADDUSERS = "ADDUSERS";

let initState = {
  userData: [],
};

const UserPageReducer = (state = initState, action) => {
  debugger
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {...state}
      stateCopy.userData = [...state.userData]
      stateCopy.userData.filter(a => {
        if (a.UserId === action.id) {
          a.follow = !a.follow
          return a
        }
        return a
      })
      return stateCopy
    }
    case UNFOLLOW: {
      let stateCopy = {...state}
      stateCopy.userData = [...state.userData]
      stateCopy.userData.filter(a => {
        if (a.UserId === action.id) {
          a.follow = !a.follow
          return a
        }
        return a
      })
      return stateCopy
    }
    case ADDUSERS: {
      let stateCopy = {...state}
      stateCopy.userData = action.id;
      return stateCopy
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
export default UserPageReducer;
