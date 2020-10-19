import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;