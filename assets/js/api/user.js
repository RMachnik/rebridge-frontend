import {BASE_URL} from './api.config'
import axios from '~/plugins/axios'

export default {
    currentUser() {
        return axios.get(`${BASE_URL}user/current`)
    },
}
