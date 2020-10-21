import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerReducer  } from 'react-router-redux';
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";
import userManagementReducer from "./user-management-reducer";
import errorReduser from "./error-reduser";
import loginReduser from "./login-reduser";
import userManagementReducer from "./user-management-reducer";


const reducers = combineReducers({
  auth: authReducer,
  userManagement: userManagementReducer,
  error: errorReduser,
  login: loginReduser,
  routing: routerReducer
  userManagement: userManagementReducer,

});


const store = createStore( 
  reducers, 
  composeWithDevTools(applyMiddleware(thunk))
);
window.store = store;

export default store;