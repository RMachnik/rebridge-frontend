import {types} from './mutations';
import catalogueService from '~/assets/js/api/catalogue';
import util from '~/assets/js/util/util';

export default {
    loadCatalogue({commit}, data) {
        return catalogueService.catalogue(data).then((response) => {
            commit(types.SET_CATALOGUE, response.data);
            return Promise.resolve()
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    addRoom({commit, dispatch}, data) {
        return catalogueService.addRoom(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    deleteRoom({commit, dispatch}, data) {
        return catalogueService.deleteRoom(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    addCategory({commit, dispatch}, data) {
        return catalogueService.addCategory(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    deleteCategory({commit, dispatch}, data) {
        return catalogueService.deleteCategory(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    addItem({commit, dispatch}, data) {
        return catalogueService.addItem(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    deleteItem({commit, dispatch}, data) {
        return catalogueService.deleteItem(data).then(() => {
            return dispatch('loadCatalogue', data)
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    }
};
