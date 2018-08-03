import {mutations} from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state: {
        projects: [],
        selectedProjectDetails: null,
        questions: [],
        error: null,
    },
    mutations,
    actions,
    getters
};
