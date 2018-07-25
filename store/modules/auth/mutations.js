export const types = {
    TOGGLE_LOGIN_FORM_STATE: 'TOGGLE_LOGIN_FORM_STATE',
    ADD_TOKEN: 'ADD_TOKEN',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    ADD_ERROR: 'ADD_ERROR',
    REMOVE_ERROR: 'REMOVE_ERROR',
    ADD_USERNAME: 'ADD_USERNAME',
    REMOVE_USERNAME: 'REMOVE_USERNAME'
}

export const mutations = {
    [types.TOGGLE_LOGIN_FORM_STATE](state) {
        state.isLoginForm = !state.isLoginForm;
    },
    [types.ADD_TOKEN](state, token) {
        state.token = token
    },
    [types.REMOVE_TOKEN](state) {
        state.token = null
    },
    [types.ADD_ERROR](state, authError) {
        state.authError = authError
    },
    [types.REMOVE_ERROR](state) {
        state.authError = null
    },
    [types.ADD_USERNAME](state, username) {
        state.username = username
    },
    [types.REMOVE_USERNAME](state) {
        state.username = null
    }

}
