import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerReducer  } from 'react-router-redux';
import authReducer from "./auth-reducer";
import errorReduser from "./error-reduser";
import loginReduser from "./login-reduser";

const reducers = combineReducers({
  auth: authReducer,
  error: errorReduser,
  login: loginReduser,
  routing: routerReducer
});


const store = createStore( 
  reducers, 
  composeWithDevTools(applyMiddleware(thunk))
);
window.store = store;

export default store;