export const types = {
    SET_PROJECTS: 'SET_PROJECTS',
    ADD_PROJECT: 'ADD_PROJECT',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    REMOVE_CURRENT_PROJECT: 'REMOVE_CURRENT_PROJECT',
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
    [types.REMOVE_CURRENT_PROJECT](state, project) {
        state.currentProject = null;
    },
};
