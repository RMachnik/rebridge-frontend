import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(token) {
        return axios.get(`${BASE_URL}/events`, config(token));
    },
    markRed(data) {
        return axios.put(`${BASE_URL}/events/` + data.eventId + "/red", data.data, config(data.token))
    }
};
