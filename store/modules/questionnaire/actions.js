import {types} from './mutations';
import {global} from '../global/mutations';
import util from '~/assets/js/util/util';
import questionnaireService from '~/assets/js/api/questionnaire';

export default {
    all({commit}, token) {
        return questionnaireService.all(token).then(
            (response) => {
                commit(types.SET_TEMPLATES, response.data);
                return Promise.resolve();
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage);
        });
    },
    add({commit, dispatch}, data) {
        return questionnaireService.add(data).then(
            (response) => {
                commit(global.ADD_SUCCESS, "Dodano szablon" + response.data.name, {root: true})
                return dispatch('all', data.token);
            }
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się dodać szablonu " + errorMessage, {root: true})
            return Promise.reject(errorMessage);
        })
    },
    delete({commit,dispatch},data){
        return questionnaireService.delete(data).then(
            (response) => {
                commit(global.ADD_SUCCESS, "Usunięto szablon" + response.data.name, {root: true})
                return dispatch('all', data.token);
            }
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się usunąć szablonu " + errorMessage, {root: true})
            return Promise.reject(errorMessage);
        })
    }
};
