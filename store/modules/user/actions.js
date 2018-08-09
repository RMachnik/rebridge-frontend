import {userTypes} from './mutations';
import {global} from '../global/mutations';
import userService from '~/assets/js/api/user';
import util from '~/assets/js/util/util';

export default {
    loadUser({commit}, token) {
        return userService.currentUser(token).then((response) => {
            commit(userTypes.SET_USER, response.data);
            return Promise.resolve()
        }).catch((error) => {
            commit(userTypes.REMOVE_USER);
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    update({commit}, data) {
        return userService.update(data).then(
            (response) => {
                commit(userTypes.SET_USER, response.data);
                commit(global.ADD_SUCCESS, "Zapisano dane", {root: true})
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    clear({commit}){
        commit(userTypes.REMOVE_USER)
    }
};
