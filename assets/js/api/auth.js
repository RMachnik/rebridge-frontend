import { BASE_URL } from './api.config'
import axios from '~/plugins/axios'

export default {
    register (userData) {
        return axios.post(`${BASE_URL}auth/register`, userData)
    },
    login (userData) {
        return axios.post(`${BASE_URL}auth/login`, userData)
    },
    logout(token) {
        let config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.delete(`${BASE_URL}users/logout`, config)
    }
}