const namespace = "global/"

export const types = {
    ADD_SUCCESS: 'ADD_SUCCESS',
    REMOVE_SUCCESS: 'REMOVE_SUCCESS',
    ADD_FAILURE: 'ADD_FAILURE',
    REMOVE_FAILURE: 'REMOVE_FAILURE'
};

export const global = {
    ADD_SUCCESS: namespace + types.ADD_SUCCESS,
    REMOVE_SUCCESS: namespace + types.REMOVE_SUCCESS,
    ADD_FAILURE: namespace + types.ADD_FAILURE,
    REMOVE_FAILURE: namespace + types.REMOVE_FAILURE
}

export const mutations = {
    [types.ADD_SUCCESS](state, msg) {
        state.success = msg;
    },
    [types.REMOVE_SUCCESS](state) {
        state.success = null;
    },
    [types.ADD_FAILURE](state, error) {
        state.failure = error;
    },
    [types.REMOVE_FAILURE](state) {
        state.failure = null;
    },
};
