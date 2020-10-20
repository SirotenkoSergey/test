const CLEAR_ERROR_LIST = 'CLEAR_ERR_LIST';
const PUSH_ERROR = 'PUSH_ERROR';
const REFRESH_ERRORS = 'REFRESH_ERRORS';


const initialState = {
    errors: []
}

const errorReduser = (state = initialState, action) => {
    switch(action.type) {
      case PUSH_ERROR:
        state.errors.push(action.data);
        return state
      case CLEAR_ERROR_LIST:
        state.errors = [];
        return state
      case REFRESH_ERRORS:
        state.errors = action.data;
        return state;
      default:
        return state;
    }
}

export const pushError = (data) => ({type: PUSH_ERROR, data: data});
export const clearErrorList = () => ({ type: CLEAR_ERROR_LIST });
export const refreshErrors = (data) => ({ type: REFRESH_ERRORS, data: data });

export default errorReduser;