import {types} from './mutations';
import util from '~/assets/js/util/util';
import projectService from '~/assets/js/api/projects';

export default {
    add({state, commit}, data) {
        return projectService.add(data).then(
            (response) => {
                commit(types.REMOVE_ERROR)
                commit(types.ADD_PROJECT, response.data);
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    all({commit}, token) {
        return projectService.all(token).then(
            (response) => {
                commit(types.REMOVE_ERROR)
                commit(types.SET_PROJECTS, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    loadDetails({commit, dispatch}, data) {
        return projectService.loadDetails(data).then(
            (response) => {
                commit(types.REMOVE_ERROR)
                commit(types.SET_CURRENT_PROJECT, response.data);
            },
        ).then(
            () => dispatch('getSurvey', data),
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    updateDetails({commit}, data) {
        return projectService.updateDetails(data).then(
            (response) => {
                commit(types.REMOVE_ERROR)
                commit(types.SET_CURRENT_PROJECT, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    getSurvey({commit}, data) {
        return projectService.getSurvey(data).then(
            (response) => {
                commit(types.REMOVE_ERROR)
                commit(types.ADD_QUESTIONNAIRE, response.data);
            },
        ).catch((error) => {
                let errorMessage = util.prettyLog(error);
                commit(types.SET_ERROR, errorMessage);
            },
        );
    },
};
