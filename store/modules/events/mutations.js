export const types = {
    SET_EVENTS: 'SET_EVENTS',
}

export const mutations = {
    [types.SET_EVENTS](state, events) {
        state.events = events
    },
}
