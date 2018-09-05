import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    register(userData) {
        return axios.post(`${BASE_URL}/auth/register`, userData);
    },
    login(userData) {
        return axios.post(`${BASE_URL}/auth/login`, userData);
    },
    loginCheck(token) {
        return axios.get(`${BASE_URL}/auth/login/` + token, config(''));
    },
    logout(token) {
        return axios.delete(`${BASE_URL}/users/logout`, config(token));
    },
};
