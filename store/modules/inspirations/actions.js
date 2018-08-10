import {types} from './mutations'
import {global} from '../global/mutations';
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
                commit(global.ADD_SUCCESS, "Dodano inspirację.", {root: true})
            }
        ).catch(
            (error) => {
                commit(global.ADD_FAILURE, "Nie udało się dodać inspiracji.", {root: true})
                util.prettyLog(error)
            }
        )
    },
    delete({commit, dispatch}, data) {
        return inspirationsService.delete(data).then(
            (response) => {
                commit(types.REMOVE_INSPIRATION, response.data)
                commit(global.ADD_SUCCESS, "Usunięto inspirację.", {root: true})
                return dispatch('all', data)
            }
        ).catch(
            (error) => {
                commit(global.ADD_FAILURE, "Nie udało się usunąć inspiracji.", {root: true})
                util.prettyLog(error)
            }
        )
    },
    addComment({commit, dispatch}, data) {
        return commentsService.add(data).then(
            (response) => {
                commit(global.ADD_SUCCESS, "Dodano komentarz.", {root: true})
                return dispatch('all', data)
            }
        ).catch(
            (error) => {
                util.prettyLog(error)
                commit(global.ADD_FAILURE, "Nie udało się dodać komentarza.", {root: true})
            }
        )
    },
    deleteComment({commit, dispatch}, data) {
        return commentsService.delete(data).then(
            (response) => {
                commit(global.ADD_SUCCESS, "Komentarz został usunięty.", {root: true})
                return dispatch('all', data)
            })
            .catch(
                (error) => {
                    util.prettyLog(error)
                    commit(global.ADD_FAILURE, "Nie udało sie usunąć komentarza.", {root: true})
                }
            )
    }
}
