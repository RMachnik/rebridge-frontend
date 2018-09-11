import {types} from './mutations';
import documentsService from '~/assets/js/api/documents';
import util from '~/assets/js/util/util';

export default {
    loadDocuments({commit}, token) {
        return documentsService.all(token).then((response) => {
            commit(types.SET_DOCUMENTS, response.data.documents);
            return Promise.resolve()
        }).catch((error) => {
            let errorMessage = util.prettyLog(error);
            return Promise.reject(errorMessage)
        });
    },
    loadDocument({commit}, data) {
        return documentsService.loadDocument(data).then(

        )
    }
};
