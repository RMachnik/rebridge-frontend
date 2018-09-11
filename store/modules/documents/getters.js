import {BASE_URL} from "../../../assets/js/api/api.config";

export default {
    dropzoneOptions: (state) => (data) => {
        return {
            url: `${BASE_URL}/projects/` + data.projectId + "/documentation",
            thumbnailWidth: 150,
            maxFilesize: 0.5,
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile",
            dictDefaultMessage: "Dodaj dokumentację",
            acceptedFiles: "image/*",
        }
    },
}