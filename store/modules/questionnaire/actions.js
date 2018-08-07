import {types} from './mutations';
import util from '~/assets/js/util/util';
import questionnaireService from '~/assets/js/api/questionnaire';

export default {
    all({commit}, token) {
        return questionnaireService.all(token).then(
            (response) => {
                commit(types.SET_TEMPLATES, response.data);
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
};
