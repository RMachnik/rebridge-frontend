import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + "/documentation/", config(data.token));
    },
    delete(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.projectId + "/documentation/" + data.documentId, config(data.token));
    }
};
