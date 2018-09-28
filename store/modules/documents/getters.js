import {BASE_URL} from "../../../assets/js/api/api.config";

export default {
    dropzoneOptions: (state) => (data) => {
        return {
            url: `${BASE_URL}/projects/` + data.projectId + "/documentation",
            maxFilesize: 2.0,
            headers: {"Authorization": "Bearer " + data.token},
            paramName: "uploadedFile",
            dictDefaultMessage: "Dodaj dokumentację",
            acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg,.pdf",
        }
    },
}