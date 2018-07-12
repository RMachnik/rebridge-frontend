import { types } from './mutations'

export default {
    setInspirations ({ commit }, inspirationsArray) {
        commit(types.SET_INSPIRATIONS, inspirationsArray)
    }
}
