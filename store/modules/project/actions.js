import {types} from './mutations'
import util from '~/assets/js/util/util'
import projectService from '~/assets/js/api/project'

export default {
    addProject({state, commit}, data) {
        return projectService.add(data).then(
            (response) => {
                commit(types.ADD_PROJECT, response.data)
            }).catch((error) => {
            util.prettyLog(error)
        })
    },
    loadProjects({commit}, token) {
        return projectService.loadAll(token).then(
            (response) => {
                commit(types.SET_PROJECTS, response.data)
            }
        ).catch((error) => {
            util.prettyLog(error)
        })
    }
}
