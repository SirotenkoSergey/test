import axios from 'axios';

export function login(data) {
    return dispatch => {
        return axios.post('http://s-ways.com/api/v1/login', data);
    }
}