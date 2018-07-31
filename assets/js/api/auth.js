import {BASE_URL} from './api.config';
import axios from '~/plugins/axios';

export default {
    register(userData) {
        return axios.post(`${BASE_URL}/auth/register`, userData);
    },
    login(userData) {
        return axios.post(`${BASE_URL}/auth/login`, userData);
    },
    loginCheck(token) {
        let config = {
            data: {},
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        };
        return axios.get(`${BASE_URL}/auth/login/` + token,config);
    },
    logout(token) {
        let config = {
            data: {},
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + token,
            },
        };
        return axios.delete(`${BASE_URL}/users/logout`, config);
    },
};
