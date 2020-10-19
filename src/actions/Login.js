import axios from 'axios';

export function login(data) {
    return dispatch => {
        return axios.post('http://192.168.0.14:8080/santiagoways_api/api/v1/login', data);
    }
}