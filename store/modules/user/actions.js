import {userTypes} from './mutations'
import userService from '~/assets/js/api/user'
import util from '~/assets/js/util/util'

export default {
    loadUser({state, commit}) {
        return userService.currentUser(state.auth.token)
            .then((response) => {
                commit(userTypes.SET_USER, response.data)
            })
            .catch((error) => {
                commit(userTypes.REMOVE_USER)
                util.prettyLog(error)
            })
    }
}
