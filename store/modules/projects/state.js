import {mutations} from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        projects: [],
        currentProject: null,
        survey: null,
        error: null,
    },
    mutations,
    actions,
};
