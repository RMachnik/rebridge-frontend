export const userTypes = {
    SET_USER: 'SET_USER',
    REMOVE_USER: 'REMOVE_USER'
}

export const mutations = {
    [userTypes.SET_USER](state, username) {
        state.user = username
    },
    [userTypes.REMOVE_USER](state) {
        state.user = null
    }
}
