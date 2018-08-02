import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(token) {
        return axios.get(`${BASE_URL}/survey/templates`, config(token));
    },
    create(data) {
        return axios.post(`${BASE_URL}/survey/templates`, data.data, config(data.token));
    },
    update(data) {
        return axios.post(`${BASE_URL}/survey/templates`, data.data, config(data.token));
    },
};