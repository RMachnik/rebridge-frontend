import { BASE_URL } from './api.config'
import axios from '~/plugins/axios'


export default {
    register (userData) {
        return axios.post(`${BASE_URL}auth/register`, userData)
    },
    login (userData) {
        return axios.post(`${BASE_URL}auth/login`, userData)
    }
}
