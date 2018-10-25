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
            url: `${BASE_URL}/projects/` + data.projectId + "/inspirations/",
            maxFilesize: 2.0,
            acceptedFiles: "image/*",
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile",
            dictDefaultMessage: "Dodaj inspirację",
            createImageThumbnails: false,
            previewTemplate: '<div class="dz-error-message" data-dz-errormessage></div><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>',
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