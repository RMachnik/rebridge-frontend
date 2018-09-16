import {BASE_URL} from '~/assets/js/api/api.config';

export default {
    find: (state, getters) => (id) => {
        return getters.all.find(inspiration => inspiration.id == id)
    },
    all: (state) => {
        return state.inspirations
    },
    dropzoneOptions: (state) => (data) => {
        return {
            url: `${BASE_URL}/projects/` + data.projectId + "/inspirations/" + data.inspirationId + "/image",
            thumbnailWidth: 150,
            maxFilesize: 0.5,
            acceptedFiles: "image/*",
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile",
            dictDefaultMessage: "Dodaj zdjęcie",
            createImageThumbnails: false
        }
    },
    imageUrl: (state, getters) => (inspirationId) => {
        let inspiration = getters.find(inspirationId);
        if (inspiration.details.imageId) {
            return `${BASE_URL}/images/` + inspiration.details.imageId
        }
        return "https://cdn.vuetifyjs.com/images/cards/desert.jpg";
    }
}