export const types = {
    SET_INSPIRATIONS: 'SET_INSPIRATIONS',
    ADD_INSPIRATION: 'ADD_INSPIRATION',
    REMOVE_INSPIRATION: 'REMOVE_INSPIRATION',
    ADD_COMMENT: 'ADD_COMMENT',
    REMOVE_COMMENT: 'REMOVE_INSPIRATION'
}

export const mutations = {
    [types.SET_INSPIRATIONS](state, inspirationsArray) {
        state.inspirations = inspirationsArray
    },
    [types.ADD_INSPIRATION](state, inspiration) {
        state.inspirations.unshift(inspiration);
    },
    [types.REMOVE_INSPIRATION](state, inspiration) {
        let index = state.inspirations.indexOf(inspiration);
        if (index > -1) {
            state.inspirations.splice(index, 1);
        }
    },
}
