import { types } from './mutations'
import authService from '~/assets/js/api/auth'

export default {
    toggleLoginFormState ({ commit }) {
        commit(types.TOGGLE_LOGIN_FORM_STATE)
    },
    register ({ commit }, data) {
        return authService.register(data)
            .then((response) => {
                commit(types.ADD_TOKEN, response.data.token)
                commit(types.SET_LOGIN_STATUS, true)
            })
            .catch((error) => {
                console.error(`Fetching register error: ${error}`)
            })
    },
    login ({ commit }, data) {
        return authService.login(data)
            .then((response) => {
                commit(types.ADD_TOKEN, response.data.token)
                commit(types.SET_LOGIN_STATUS, true)
            })
            .catch((error) => {
                console.error(`Fetching login error: ${error}`)
            })
    },
}
