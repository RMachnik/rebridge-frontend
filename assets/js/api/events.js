import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    all(token) {
        return axios.get(`${BASE_URL}/events`, config(token));
    }
};
