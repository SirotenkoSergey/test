import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";
import userManagementReducer from "./user-management-reducer";

const reducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
  userManagement: userManagementReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;