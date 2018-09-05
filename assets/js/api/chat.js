import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + "/chat", config(data.token));
    },
    send(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + "/chat", data.data, config(data.token));
    }
};
