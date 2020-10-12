import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
  form: formReducer,
});


const store = createStore(reducers);

export default store;