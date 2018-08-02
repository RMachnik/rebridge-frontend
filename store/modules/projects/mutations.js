export const types = {
    SET_PROJECTS: 'SET_PROJECTS',
    ADD_PROJECT: 'ADD_PROJECT',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    REMOVE_CURRENT_PROJECT: 'REMOVE_CURRENT_PROJECT',
    ADD_SURVEY: 'ADD_SURVEY',
    REMOVE_SURVEY: 'REMOVE_SURVEY',
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
};
