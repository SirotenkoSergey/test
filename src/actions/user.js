import axios from 'axios';
import { setUserData } from '../redux/auth-reducer';
import { pushError, clearErrorList } from '../redux/error-reduser';

export const login =  (identifier, password, remember = false) => {
    return async dispatch => {
        dispatch(clearErrorList());
        try {
            const res = await axios.post(`http://18.184.124.193/api/v1/login`, {
                identifier,
                password, 
                remember
            });
            if(res.data.success) {
                dispatch(setUserData(res.data));
                localStorage.setItem('token', res.data.token);
                window.location = '/';
            }else{
                if(res.data.is_need_verify) {
                    dispatch(setUserData({id: res.data.user_id}));
                    console.log(window.store.getState().auth)
                    window.location = '/verify';
                }else {
                    dispatch(pushError(res.data.errors));
                }
            }          
        } catch (e) {
            dispatch(pushError(e));
        }
    }
}

export const verify = (user_id, code) => {
    return async dispatch => {
        dispatch(clearErrorList());
        try {
            const res = await axios.post(`http://18.184.124.193/api/v1/verify`, { user_id, code });
            if(res.data.success) {
                dispatch(setUserData(res.data));
                localStorage.setItem('token', res.data.token);
                window.location = '/';
            }else{
                dispatch(pushError(res.data.errors));
            }          
        } catch (e) {
            dispatch(pushError(e));
        }
    }
}