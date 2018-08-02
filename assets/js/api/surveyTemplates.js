import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    getAll(data) {
        return axios.get(`${BASE_URL}/survey/templates`, config(data.token));
    },
    create(data) {
        return axios.post(`${BASE_URL}/survey/templates`, data.data, config(data.token));
    },
    update(data) {
        return axios.post(`${BASE_URL}/survey/templates`, data.data, config(data.token));
    },
};