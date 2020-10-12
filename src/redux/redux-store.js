import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});


const store = createStore(reducers);

export default store;