import { createStore, combineReducers, applyMiddleware } from "redux";
import contentPageReducer from "./contentPage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import UserPageReducer from "./UserPage-reducer";
import AppReducer from "./AppReducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  contentPage: contentPageReducer,
  dialogsPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: UserPageReducer,
  form: formReducer,
  App: AppReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

window.store = store;

export default store;
