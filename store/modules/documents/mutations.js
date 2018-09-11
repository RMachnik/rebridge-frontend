export const types = {
    SET_DOCUMENTS: 'SET_DOCUMENTS',
}

export const mutations = {
    [types.SET_DOCUMENTS](state, documents) {
        state.documents = documents
    },
}
