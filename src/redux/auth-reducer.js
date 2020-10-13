import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const REDIRECT_TO_VERIFICATION = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  redirectVerification: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case REDIRECT_TO_VERIFICATION:
      return {
        ...state,
        ...action.redirectVerification,
      }
    default:
      return state;
  }

}

export const setRedirectVerification = () => ({type: REDIRECT_TO_VERIFICATION, redirectVerification: true});
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:
  {userId, email, login, isAuth}  });

export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe()
    .then(response => {
      if(response.data.resultCode === 0){
        dispatch(setAuthUserData(response.userId, response.email, response.login, true))
      }
    })
};

export const loginUser = (email, password, remember) => (dispatch) => {
  authAPI.login(email, password, remember)
    .then(response => {
      if(response.data.resultCode === 0){
        dispatch(getAuthUserData());
      } 
    })
}

export const requestPassword = () => (dispatch) => {
  authAPI.requestPassword()
    .then(response => {
      if(true){
        dispatch(setRedirectVerification())
      };
    })
}

export default authReducer;