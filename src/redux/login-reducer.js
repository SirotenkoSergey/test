const CHECKED = 'CHECKED';
const SHOW_PASSWORD = 'SHOW-PASSWORD'

const initialState = {
  checkbox: 'false',
  typePassword: 'password'
}

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHECKED:
      return {
        ...state,
        ...action.checkToggle,
      }
    case SHOW_PASSWORD:
      if(action.typePassword === 'password'){
        return {
          ...state,
          typePassword: 'text'
        };
      } else {
        return {
          ...state,
          typePassword: 'password'
        }
      }

    default:
      return state;
  }

}

export const checkboxToggle = (checkToggle) => ({type: CHECKED, checkToggle});
export const showPassword = (typePassword) => ({type: SHOW_PASSWORD, typePassword});

export default loginReducer;