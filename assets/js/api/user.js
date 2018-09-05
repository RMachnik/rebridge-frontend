import {BASE_URL,config} from './api.config'
import axios from '~/plugins/axios'

export default {
    currentUser(token) {
        return axios.get(`${BASE_URL}/users/current`, config(token))
    },
    update(data){
        return axios.put(`${BASE_URL}/users/current`, data.data, config(data.token));
    }
}
