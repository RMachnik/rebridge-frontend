import {types} from './mutations';
import eventsService from '~/assets/js/api/events';
import util from '~/assets/js/util/util';

export default {
    load({commit}, token) {
        return eventsService.all(token).then((response) => {
            commit(types.SET_EVENTS, response.data);
            return Promise.resolve()
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
};
