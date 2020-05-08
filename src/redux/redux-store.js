import { createStore, combineReducers } from "redux";
import contentPageReducer from "./contentPage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import UserPageReducer from "./UserPage-reducer";

let reducers = combineReducers({
    contentPage: contentPageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: UserPageReducer,
});

let store = createStore(reducers);



export default store;