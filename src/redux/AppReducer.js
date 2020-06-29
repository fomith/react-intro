const FOLLOW = "FOLLOW";

let initState = {
  userData: [],
  fetching: true,
};

const appReducer = (state = initState, action) => {
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

    default:
      return state;
  }
};

export const initializedSucces = (text) => ({
  type: FOLLOW,
  id: text,
});
export const initializedWait = (text) => ({
  type: FOLLOW,
  id: text,
});

/* export const openUsersThunk = (currentPage) => {
  return (dispatch) => {
    dispatch(fetchingAC(true));
    openUsers(currentPage).then((response) => {
      dispatch(addusers(response));
      dispatch(fetchingAC(false));
      dispatch(newPage(currentPage))
    });
  };
}; */

export default appReducer;
