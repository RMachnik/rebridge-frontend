export const types = {
    SET_INSPIRATIONS: 'SET_INSPIRATIONS'
}

export const mutations = {
    [types.SET_INSPIRATIONS] (state, inspirationsArray) {
        state.inspirations = inspirationsArray
    }
}
