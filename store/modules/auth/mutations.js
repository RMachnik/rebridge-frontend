export const types = {
    TOGGLE_LOGIN_FORM_STATE: 'TOGGLE_LOGIN_FORM_STATE',
    SET_LOGIN_STATUS: 'SET_LOGGED_STATUS',
    ADD_TOKEN: 'ADD_TOKEN'
}

export const mutations = {
    [types.TOGGLE_LOGIN_FORM_STATE] (state) {
        state.isLoginForm = !state.isLoginForm;
    },
    [types.SET_LOGIN_STATUS] (state, status) {
        state.isLogged = status;
    },
    [types.ADD_TOKEN] (state, token) {
        state.token = token
    }
}
