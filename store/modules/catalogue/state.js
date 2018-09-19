import { mutations } from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        catalogue: null
    },
    mutations,
    actions
}
