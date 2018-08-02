import {types} from './mutations';
import {user} from '~/store/modules/user/mutations';
import authService from '~/assets/js/api/auth';
import util from '~/assets/js/util/util';
import Cookie from 'js-cookie';

export default {
    toggleLoginFormState({commit}) {
        commit(types.TOGGLE_LOGIN_FORM_STATE);
    },
    register({commit, dispatch}, data) {
        return authService.register(data).then((response) => {
            dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.ADD_ERROR, errorMessage);
        });
    },
    login({commit, dispatch}, data) {
        return authService.login(data).then((response) => {
            dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            dispatch('removeTokenAndCookie')
            let errorMessage = util.prettyLog(error);
            commit(types.ADD_ERROR, errorMessage);
        });
    },
    loginCheck({commit, dispatch}, token) {
        return authService.loginCheck(token).then((response) => {
            dispatch('setTokenAndCookie', response.data.token);
        }).catch((error) => {
            dispatch('removeTokenAndCookie');
            util.prettyLog(error);
        });
    },
    logout({state, commit, dispatch}) {
        return authService.logout(state.token).then(() => {
            dispatch('removeTokenAndCookie');
        }).catch(error => {
            util.prettyLog(error);
        });
    },
    initAuth({commit, dispatch}, data) {
        if (data.cookie) {
            let authCookie = data.cookie.split(';').
                find(c => c.trim().startsWith('authToken='));
            if (authCookie) {
                authCookie = authCookie.split('=')[1];
                commit(types.ADD_TOKEN, authCookie);
            }
            dispatch('loginCheck', authCookie);
        }
    },
    setTokenAndCookie({commit, state}, token) {
        commit(types.REMOVE_ERROR);
        commit(types.ADD_TOKEN, token);
        Cookie.set('authToken', token);
    },
    removeTokenAndCookie({commit}) {
        commit(types.REMOVE_TOKEN);
        Cookie.remove('authToken');
    },
};
