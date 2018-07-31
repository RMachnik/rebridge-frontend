import {BASE_URL} from './api.config';
import axios from '~/plugins/axios';

export default {
    add(data) {
        let config = {
            data: '',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + data.token,
            },
        };
        return axios.post(`${BASE_URL}/projects`, data.data, config);
    },
    loadAll(token) {
        let config = {
            data: '',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + token,
            },
        };
        return axios.get(`${BASE_URL}/projects`, config);
    },
    loadDetails(data) {
        let config = {
            data: '',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + data.token,
            },
        };
        return axios.get(`${BASE_URL}/projects/` + data.projectId + '/details',
            config);
    },
    addInvestor(data) {
        let config = {
            data: '',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + data.token,
            },
        };
        return axios.post(`${BASE_URL}/projects/` + data.projectId + '/details',
            data.data, config);
    },
};
