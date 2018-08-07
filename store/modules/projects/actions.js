import {types} from './mutations';
import {global} from '../global/mutations';
import util from '~/assets/js/util/util';
import projectService from '~/assets/js/api/projects';

export default {
    add({state, commit}, data) {
        return projectService.add(data).then(
            (response) => {
                commit(types.ADD_PROJECT, response.data);
                commit(global.ADD_SUCCESS, "Dodano projekt " + response.data.name, {root: true})
                return Promise.resolve()
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    delete({commit}, data) {
        return projectService.delete(data).then(
            () => {
                commit(types.REMOVE_PROJECT, data.project);
                commit(global.ADD_SUCCESS, "Usunieto projekt" + data.project.name, {root: true})
                return Promise.resolve()
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    all({commit}, token) {
        return projectService.all(token).then(
            (response) => {
                commit(types.SET_PROJECTS, response.data);
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    addInvestor({commit, dispatch}, data) {
        return projectService.addInvestor(data).then(
            () => {
                commit(global.ADD_SUCCESS, "Dodano investora", {root: true})
                return dispatch('loadDetails', data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    removeInvestor({commit, dispatch}, data) {
        return projectService.removeInvestor(data).then(
            () => {
                commit(global.ADD_SUCCESS, "Usunięto", {root: true})
                return dispatch('loadDetails', data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    loadDetails({commit, dispatch}, data) {
        return projectService.loadDetails(data).then(
            (response) => {
                commit(types.SET_PROJECT_DETAILS, response.data);
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    updateDetails({commit}, data) {
        return projectService.updateDetails(data).then(
            (response) => {
                commit(types.SET_PROJECT_DETAILS, response.data);
                commit(global.ADD_SUCCESS, "Zmiemiono dane", {root: true})
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    loadQuestionnaire({commit}, data) {
        return projectService.loadQuestionnaire(data).then(
            (response) => {
                commit(types.SET_QUESTIONS, response.data);
                return Promise.resolve()
            },
        ).catch((error) => {
                let errorMessage = util.prettyLog(error);
                commit(types.ADD_ERROR, errorMessage);
                return Promise.reject(errorMessage)
            },
        );
    },
    answer({commit}, data) {
        return projectService.answer(data).then(
            (response) => {
                commit(types.SET_QUESTIONS, response.data);
                commit(global.ADD_SUCCESS, "Dodano odpowiedzi", {root: true})
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
};
