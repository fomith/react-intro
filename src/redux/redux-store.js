import { createStore, combineReducers, applyMiddleware } from "redux";
import contentPageReducer from "./contentPage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import UserPageReducer from "./UserPage-reducer";
import ThunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  contentPage: contentPageReducer,
  dialogsPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: UserPageReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
