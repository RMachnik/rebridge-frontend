import {userTypes} from './mutations';
import userService from '~/assets/js/api/user';
import util from '~/assets/js/util/util';

export default {
    loadUser({commit}, token) {
        return userService.currentUser(token).then((response) => {
            commit(userTypes.SET_USER, response.data);
        }).catch((error) => {
            commit(userTypes.REMOVE_USER);
            util.prettyLog(error);
        });
    },
    update({commit}, data) {
        return userService.update(data).then(
            (response) => {
                commit(userTypes.SET_USER, response.data);
            },
        ).catch(error => util.prettyLog(error));
    },
};
