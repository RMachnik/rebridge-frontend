export const types = {
    SET_PROJECTS: 'SET_PROJECTS',
    ADD_PROJECT: 'ADD_PROJECT',
}

export const mutations = {
    [types.SET_PROJECTS](state, projects) {
        state.projects = projects
    },
    [types.ADD_PROJECT](state, project) {
        state.projects.unshift(project)
    }
}
