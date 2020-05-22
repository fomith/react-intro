import { createStore, combineReducers, applyMiddleware } from "redux";
import contentPageReducer from "./contentPage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import UserPageReducer from "./UserPage-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  contentPage: contentPageReducer,
  dialogsPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: UserPageReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
