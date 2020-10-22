const SET_USER_DATA = 'SET_USER_DATA';
const REDIRECT_TO_VERIFICATION = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

const initialState = {
  id:           null,
  first_name:   null,
  last_name:    null,
  email:        null,
  phone:        null,
  isAuth:       false,
  is_active:    null,
  avatar:       null
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case REDIRECT_TO_VERIFICATION:
      return {
        ...state,
        ...action.redirectVerification,
        isAuth: true,
      }
    case LOGOUT: {
      return {
        ...{}, isAuth: false
      }
    }
    
    default:
      return state;
  }
}

export const setRedirectVerification = () => ({type: REDIRECT_TO_VERIFICATION, redirectVerification: true});
export const setUserData = (data) => ({ type: SET_USER_DATA, data: data });
export const removeUserData = () => ({ type: LOGOUT });


export default authReducer;