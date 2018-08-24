import inspirationsService from '~/assets/js/api/inspirations';

export default {
    dropzoneOptions: (state) => (data) => {
        return inspirationsService.dropzoneOptions(data)
    }
}