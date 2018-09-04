import inspirationsService from '~/assets/js/api/inspirations';
import {BASE_URL} from '~/assets/js/api/api.config';

export default {
    find: (state, getters) => (id) => {
        return getters.all.find(inspiration => inspiration.id == id)
    },
    all: (state) => {
        return state.inspirations
    },
    dropzoneOptions: (state) => (data) => {
        return inspirationsService.dropzoneOptions(data)
    },
    imageUrl: (state, getters) => (inspirationId) => {
        let inspiration = getters.find(inspirationId);
        if (inspiration.details.imageId) {
            return `${BASE_URL}/images/` + inspiration.details.imageId
        }
        return "https://cdn.vuetifyjs.com/images/cards/desert.jpg";
    }
}