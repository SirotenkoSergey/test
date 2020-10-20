import axios from 'axios';
import { setUserData } from '../redux/auth-reducer';
import { pushError, clearErrorList, refreshErrors } from '../redux/error-reduser';
import { push } from 'react-router-redux';

export const login =  (identifier, password, remember = false) => {
    return async dispatch => {
        dispatch(clearErrorList());
        try {
            const res = await axios.post(`http://18.184.124.193/api/v1/login`, {
                identifier,
                password, 
                remember
            });
            console.log(res.data);
            if(res.data.success) {
                dispatch(setUserData(res.data));
                localStorage.setItem('token', res.data.token);
            }else{
                if(res.data.is_need_verify) {
                    dispatch(setUserData({id: res.data.user_id}));
                }else {
                    dispatch(pushError(res.data.errors));
                }
            }          
        } catch (e) {
            console.log(e);
        }
    }
}