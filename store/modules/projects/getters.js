import {BASE_URL} from '~/assets/js/api/api.config';

export default {
    find: (state, getters) => (id) => {
        return getters.all.find(project => project.id == id)
    },
    all: (state) => {
        return state.projects
    },
    dropzoneOptions: (state) => (data) => {
        return {
            url: `${BASE_URL}/projects/` + data.projectId + "/image",
            maxFilesize: 0.5,
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile",
            dictDefaultMessage: "Dodaj zdjęcie",
            acceptedFiles: "image/*",
        }
    },
    imageUrl: (state, getters) => (projectId) => {
        let project = getters.find(projectId);
        if (project.details.imageId) {
            return `${BASE_URL}/images/` + project.details.imageId
        }
        return "https://cdn.vuetifyjs.com/images/cards/desert.jpg";
    }
}