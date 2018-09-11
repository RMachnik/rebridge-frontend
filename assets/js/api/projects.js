import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    add(data) {
        return axios.post(`${BASE_URL}/projects`, data.data,
            config(data.token));
    },
    delete(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.project.id,
            config(data.token));
    },
    all(token) {
        return axios.get(`${BASE_URL}/projects`, config(token));
    },
    loadDetails(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + '/details',
            config(data.token));
    },
    updateDetails(data) {
        return axios.put(`${BASE_URL}/projects/` + data.projectId + "/details", data.data, config(data.token));
    },
    addInvestor(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + '/details/investors', data.data, config(data.token));
    },
    removeInvestor(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.projectId + '/details/investors/' + data.email, config(data.token));
    },
    loadQuestionnaire(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + '/questionnaire',
            config(data.token));
    },
    answer(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + '/questionnaire', data.data, config(data.token))
    },
};
