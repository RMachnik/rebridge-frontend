export const types = {
    SET_CATALOGUE: 'SET_CATALOGUE',
}

export const mutations = {
    [types.SET_CATALOGUE](state, catalogue) {
        state.catalogue = catalogue
    },
}
