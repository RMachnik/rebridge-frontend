import {types} from './mutations'
import inspirationsService from '~/assets/js/api/inspirations'
import commentsService from '~/assets/js/api/comments'
import util from '~/assets/js/util/util'

export default {
    all({commit}, data) {
        return inspirationsService.all(data).then(
            (response) => {
                commit(types.SET_INSPIRATIONS, response.data)
            }
        ).catch(
            (error) => {
                util.prettyLog(error)
            }
        )
    },
    add({commit, dispatch}, data) {
        return inspirationsService.add(data).then(
            (response) => {
                commit(types.ADD_INSPIRATION, response.data)
            }
        ).catch(
            (error) => {
                util.prettyLog(error)
            }
        )
    },
    addComment({commit, dispatch}, data) {
        return commentsService.add(data).then(
            (response) => {
                return dispatch('all', data)
            }
        ).catch(
            (error) => {
                util.prettyLog(error)
            }
        )
    }
}
