import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    add(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId + '/comments', data.data, config(data.token));
    },
    update(data) {
        return axios.put(`${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId + '/comments', data.data, config(data.token));
    },
    delete(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId + '/comments/' + data.commentId, config(data.token));
    },
};
