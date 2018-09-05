import {mutations} from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        templates: [],
        currentTemplate: null
    },
    mutations,
    actions
}
