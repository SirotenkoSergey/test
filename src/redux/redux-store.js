import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
});


const store = createStore(reducers);

export default store;