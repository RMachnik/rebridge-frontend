import { mutations } from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        isLogged: false,
        isLoginForm: true,
        token: ''
    },
    mutations,
    actions
}
