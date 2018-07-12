import Vuex from 'vuex'

import modules from './modules'

const createStore = () => {
    return new Vuex.Store({
        state: {

        },
        modules
    })
}

export default createStore
