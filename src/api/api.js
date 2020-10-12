import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'url',
});

export const authAPI = {
  authMe() {
    return instance.get();
  },
  login(email, password, remember = false) {
    return instance.post('', {email, password, remember});
  },
  requestPassword(email) {
    return instance.post('', {email});
  }
}