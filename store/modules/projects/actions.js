import {types} from './mutations';
import {global} from '../global/mutations';
import util from '~/assets/js/util/util';
import projectService from '~/assets/js/api/projects';
import chatService from '~/assets/js/api/chat';

export default {
    add({state, commit}, data) {
        return projectService.add(data).then(
            (response) => {
                commit(types.ADD_PROJECT, response.data);
                commit(global.ADD_SUCCESS, "Dodano projekt " + response.data.name, {root: true})
                return Promise.resolve()
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się projektu " + errorMessage, {root: true})
            return Promise.reject(errorMessage)
        });
    },
    updateProject({state, commit}, data) {
        return projectService.updateProject(data).then(
            () => {
                return Promise.resolve()
            }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się zmienić nazwy" + errorMessage, {root: true})
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
            commit(global.ADD_FAILURE, "Nie udało się usunąc projektu" + errorMessage, {root: true})
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
            commit(global.ADD_FAILURE, "Nie udało się dodać inwestora " + errorMessage, {root: true})
            return Promise.reject(errorMessage)
        });
    },
    removeInvestor({commit, dispatch}, data) {
        return projectService.removeInvestor(data).then(
            () => {
                commit(global.ADD_SUCCESS, "Usunięto inwestora", {root: true})
                return dispatch('loadDetails', data);
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się usunąć investora " + errorMessage, {root: true})
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
                commit(global.ADD_SUCCESS, "Zaktualizowane dane projektu.", {root: true})
                return Promise.resolve()
            },
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało zaktualizować projektu " + errorMessage, {root: true})
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
                commit(global.ADD_FAILURE, "Nie udało załadować kwestionariusza " + errorMessage, {root: true})
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
            commit(global.ADD_FAILURE, "Nie udało zaktualizować odpowiedzi " + errorMessage, {root: true})
            return Promise.reject(errorMessage)
        });
    },
    loadChat({commit}, data) {
        return chatService.all(data).then(
            (response) => {
                commit(types.SET_CHAT, response.data);
                return Promise.resolve()
            }
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się załatować wiadomości " + errorMessage, {root: true})
            return Promise.reject(errorMessage)
        })
    },
    sendChatMessage({commit, dispatch}, data) {
        return chatService.send(data).then(
            (response) => {
                return dispatch('loadChat', data)
            }
        ).catch((error) => {
            let errorMessage = util.prettyLog(error);
            commit(global.ADD_FAILURE, "Nie udało się wysłać wiadomości " + errorMessage, {root: true})
            return Promise.reject(errorMessage)
        })
    }
};
