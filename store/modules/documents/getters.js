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
            createImageThumbnails: false,
            previewTemplate: '<div class="uploaded-image"><span>Dodaj dokumentację</span><div class="dz-error-message" data-dz-errormessage></div><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div></div>',

        }
    },
}