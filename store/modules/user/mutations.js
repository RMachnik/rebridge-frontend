export const userTypes = {
    SET_USER: 'SET_USER',
    REMOVE_USER: 'REMOVE_USER',
}

export const userGlobal ={
    REMOVE_USER: "user/" + userTypes.REMOVE_USER
}
export const mutations = {
    [userTypes.SET_USER](state, user) {
        state.currentUser = user
    },
    [userTypes.REMOVE_USER](state) {
        state.currentUser = null
    },
}
