import {types} from './mutations'
import authService from '~/assets/js/api/auth'
import util from '~/assets/js/util/util'
import Cookie from 'js-cookie'

export default {
    toggleLoginFormState({commit}) {
        commit(types.TOGGLE_LOGIN_FORM_STATE)
    },
    register({commit}, data) {
        return authService.register(data)
            .then((response) => {
                commit(types.REMOVE_ERROR)
                commit(types.ADD_TOKEN, response.data.token)
                Cookie.set('authToken', response.data.token)

                const username = data.email.split("@")[0];
                commit(types.ADD_USERNAME, username)
                Cookie.set('username', username)
            })
            .catch((error) => {
                commit(types.ADD_ERROR, error.response.data.message)
                util.prettyLog(error)
            })
    },
    login({commit}, data) {
        return authService.login(data)
            .then((response) => {
                commit(types.REMOVE_ERROR)
                commit(types.ADD_TOKEN, response.data.token)
                Cookie.set('authToken', response.data.token)

                const username = data.email.split("@")[0];
                commit(types.ADD_USERNAME, username)
                Cookie.set('username', username)
            })
            .catch((error) => {
                commit(types.ADD_ERROR, error.response.data.message)
                util.prettyLog(error)
            })
    },
    logout({state, commit}) {
        return authService.logout(state.token)
            .then(() => {
                commit(types.REMOVE_TOKEN)
                commit(types.REMOVE_USERNAME)
                Cookie.remove('authToken')
            })
            .catch(error => {
                util.prettyLog(error);
            })

    },
    initAuth({commit}, data) {
        if (data.cookie) {
            console.log(data.cookie)
            let authCookie = data.cookie.split(";").find(c => c.trim().startsWith("authToken="))
            let usernameCookie = data.cookie.split(";").find(c => c.trim().startsWith("username="))
            if (authCookie) {
                authCookie = authCookie.split("=")[1]
                commit(types.ADD_TOKEN, authCookie)
            }
            if (usernameCookie) {
                usernameCookie = usernameCookie.split("=")[1].split(".")[0]
                commit(types.ADD_USERNAME, usernameCookie)
            }
        }
    }
}
