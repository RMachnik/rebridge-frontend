import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + "/inspirations", config(data.token));
    },
    add(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + "/inspirations", data.data, config(data.token));
    },
    update(data) {
        return axios.put(`${BASE_URL}/projects/` + data.projectId + "/inspirations", data.data, config(data.token));
    },
    delete(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId, config(data.token));
    },
    dropzoneOptions(data) {
        return {
            url: `${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId + "/image",
            thumbnailWidth: 150,
            maxFilesize: 0.5,
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile"
        }
    }
};
