import {types} from './mutations'
import authService from '~/assets/js/api/auth'
import Cookie from 'js-cookie'

export default {
    toggleLoginFormState({commit}) {
        commit(types.TOGGLE_LOGIN_FORM_STATE)
    },
    register({commit}, data) {
        return authService.register(data)
            .then((response) => {
                commit(types.ADD_TOKEN, response.data.token)
                Cookie.set('authToken', response.data.token)
            })
            .catch((error) => {
                console.error(`Fetching register error: ${error}`)
            })
    },
    login({commit}, data) {
        return authService.login(data)
            .then((response) => {
                commit(types.ADD_TOKEN, response.data.token)
                Cookie.set('authToken', response.data.token)
            })
            .catch((error) => {
                console.error(`Fetching login error: ${error}`)
            })
    },
    logout({state, commit}) {
        return authService.logout(state.token)
            .then(() => {
                commit(types.REMOVE_TOKEN)
                Cookie.remove('authToken')
            })
            .catch(error => {
                console.log(error.response.headers);
            })
    },
    initAuth({commit}, data) {
        if (data.cookie) {
            let authCookie = data.cookie.split(";").find(c => c.trim().startsWith("authToken="))
            if (authCookie) {
                authCookie = authCookie.split("=")[1]
                commit(types.ADD_TOKEN, authCookie)
            }
        }
    }
}
