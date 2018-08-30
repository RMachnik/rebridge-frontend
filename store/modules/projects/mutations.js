export const types = {
    SET_PROJECTS: 'SET_PROJECTS',
    ADD_PROJECT: 'ADD_PROJECT',
    REMOVE_PROJECT: 'REMOVE_PROJECT',
    SET_PROJECT_DETAILS: 'SET_PROJECT_DETAILS',
    REMOVE_PROJECT_DETAILS: 'REMOVE_PROJECT_DETAILS',
    SET_QUESTIONS: 'SET_QUESTIONS',
    REMOVE_QUESTIONS: 'REMOVE_QUESTIONS',
    SET_CHAT: 'SET_CHAT',
    REMOVE_CHAT: 'REMOVE_CHAT'
};

export const mutations = {
    [types.SET_PROJECTS](state, projects) {
        state.projects = projects;
    },
    [types.ADD_PROJECT](state, project) {
        state.projects.unshift(project);
    },
    [types.REMOVE_PROJECT](state, project) {
        let index = state.projects.indexOf(project);
        if (index > -1) {
            state.projects.splice(index, 1);
        }
    },
    [types.SET_PROJECT_DETAILS](state, projectDetails) {
        state.selectedProjectDetails = projectDetails;
    },
    [types.REMOVE_PROJECT_DETAILS](state) {
        state.selectedProjectDetails = null;
    },
    [types.SET_QUESTIONS](state, questions) {
        state.questions = questions.questions;
    },
    [types.REMOVE_QUESTIONS](state) {
        state.questions = null;
    },
    [types.SET_CHAT](state, chat) {
        state.chat = chat;
    },
    [types.REMOVE_CHAT](state) {
        state.chat = null;
    }
};
