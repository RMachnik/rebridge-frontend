import {types} from './mutations';
import util from '~/assets/js/util/util';
import projectService from '~/assets/js/api/projects';

export default {
    add({state, commit}, data) {
        return projectService.add(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.ADD_PROJECT, response.data);
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    delete({commit}, data) {
        return projectService.delete(data).then(
            () => {
                commit(types.REMOVE_PROJECT, data.project);
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    all({commit}, token) {
        return projectService.all(token).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.SET_PROJECTS, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    addInvestor({commit, dispatch}, data) {
        return projectService.addInvestor(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                dispatch('loadDetails', data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    loadDetails({commit, dispatch}, data) {
        return projectService.loadDetails(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.SET_PROJECT_DETAILS, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    updateDetails({commit}, data) {
        return projectService.updateDetails(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.SET_PROJECT_DETAILS, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
    loadQuestionnaire({commit}, data) {
        return projectService.loadQuestionnaire(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.SET_QUESTIONS, response.data);
            },
        ).catch((error) => {
                let errorMessage = util.prettyLog(error);
                commit(types.SET_ERROR, errorMessage);
            },
        );
    },
    answer({commit}, data) {
        return projectService.answer(data).then(
            (response) => {
                commit(types.REMOVE_ERROR);
                commit(types.SET_QUESTIONS, response.data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(types.SET_ERROR, errorMessage);
        });
    },
};
