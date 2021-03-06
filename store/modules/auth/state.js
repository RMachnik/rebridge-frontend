import { mutations } from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        isLoginForm: true,
        token: null,
        authError: null
    },
    mutations,
    actions
}
