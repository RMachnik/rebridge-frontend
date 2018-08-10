import {types} from './mutations';
import {userGlobal} from '~/store/modules/user/mutations';
import authService from '~/assets/js/api/auth';
import util from '~/assets/js/util/util';
import Cookie from 'js-cookie';

export default {
    toggleLoginFormState({commit}) {
        commit(types.TOGGLE_LOGIN_FORM_STATE);
    },
    register({commit, dispatch}, data) {
        return authService.register(data).then((response) => {
            return dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    login({commit, dispatch}, data) {
        return authService.login(data).then((response) => {
            return dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return dispatch('removeTokenAndCookie').then(() => {
                return Promise.reject(errorMessage)
            });
        });
    },
    loginCheck({commit, dispatch}, token) {
        return authService.loginCheck(token).then((response) => {
            return dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.ADD_ERROR, errorMessage);
            return dispatch('removeTokenAndCookie');
        });
    },
    logout({state, commit, dispatch}) {
        return authService.logout(state.token).then(() => {
            commit(userGlobal.REMOVE_USER, "", {root: true})
            return dispatch('removeTokenAndCookie');
        }).catch(error => {
            util.prettyLog(error);
        });
    },
    initAuth({commit, dispatch}, data) {
        if (data.cookie) {
            let authCookie = data.cookie.split(';').find(c => c.trim().startsWith('authToken='));
            if (authCookie) {
                authCookie = authCookie.split('=')[1];
            }
            return dispatch('loginCheck', authCookie);
        }
    },
    setTokenAndCookie({commit, state}, token) {
        commit(types.REMOVE_ERROR);
        commit(types.ADD_TOKEN, token);
        Cookie.set('authToken', token);
        return Promise.resolve()
    },
    removeTokenAndCookie({commit}) {
        commit(types.REMOVE_TOKEN);
        Cookie.remove('authToken');
        return Promise.resolve()
    },
};
