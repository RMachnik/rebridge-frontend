import {BASE_URL} from './api.config'
import axios from '~/plugins/axios'

export default {
    currentUser(token) {
        let config = {
            data: {},
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.get(`${BASE_URL}/users/current`, config)
    },
}
