export const types = {
    SET_PROJECTS: 'SET_PROJECTS',
    ADD_PROJECT: 'ADD_PROJECT',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    REMOVE_CURRENT_PROJECT: 'REMOVE_CURRENT_PROJECT',
    ADD_QUESTIONNAIRE: 'ADD_QUESTIONNAIRE',
    REMOVE_QUESTIONNAIRE: 'REMOVE_QUESTIONNAIRE',
    SET_ERROR: 'ADD_ERROR',
    REMOVE_ERROR: 'REMOVE_ERROR',
};

export const mutations = {
    [types.SET_PROJECTS](state, projects) {
        state.projects = projects;
    },
    [types.ADD_PROJECT](state, project) {
        state.projects.unshift(project);
    },
    [types.SET_CURRENT_PROJECT](state, project) {
        state.currentProject = project;
    },
    [types.REMOVE_CURRENT_PROJECT](state) {
        state.currentProject = null;
    },
    [types.ADD_SURVEY](state, survey) {
        state.survey = survey;
    },
    [types.REMOVE_CURRENT_PROJECT](state) {
        state.survey = null;
    },
    [types.SET_ERROR](state, error) {
        state.error = error;
    },
    [types.REMOVE_ERROR](state) {
        state.error = null;
    },
};
