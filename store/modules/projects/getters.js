import projectService from '~/assets/js/api/projects';
import {BASE_URL} from '~/assets/js/api/api.config';

export default {
    find: (state, getters) => (id) => {
        return getters.all.find(project => project.id == id)
    },
    all: (state) => {
        return state.projects
    },
    dropzoneOptions: (state) => (data) => {
        return projectService.dropzoneOptions(data)
    },
    imageUrl: (state, getters) => (projectId) => {
        let project = getters.find(projectId);
        if(project.details.imageId){
            return `${BASE_URL}/images/` + project.details.imageId
        }
        return "https://cdn.vuetifyjs.com/images/cards/desert.jpg";
    }
}