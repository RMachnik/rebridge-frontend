import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    add(data) {
        return axios.post(`${BASE_URL}/projects`, data.data,
            config(data.token));
    },
    loadAll(token) {
        return axios.get(`${BASE_URL}/projects`, config(token));
    },
    loadDetails(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + '/details',
            config(data.token));
    },
    addInvestor(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + '/details',
            data.data, config(data.token));
    },
    getSurvey(data){
        return axios.get(`${BASE_URL}/projects/` + data.projectId + '/survey',
            config(data.token));
    }
};
