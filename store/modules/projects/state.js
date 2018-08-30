import {mutations} from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state: {
        projects: [],
        selectedProjectDetails: null,
        questions: [],
        chat: null,
        error: null,
    },
    mutations,
    actions,
    getters
};
