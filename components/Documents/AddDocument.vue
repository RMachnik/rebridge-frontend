<template>
    <div>
        <dropzone id="addDocument"
                  :options="options"
                  :destroyDropzone="true"
                  @vdropzone-success="uploadCompleted"
        ></dropzone>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';
    import Dropzone from 'nuxt-dropzone'
    import 'nuxt-dropzone/dropzone.css'

    export default {
        name: 'AddDocument',
        components: {Dropzone},
        computed: {
            ...mapState('documents', ['documents']),
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails']),
            ...mapGetters('documents', ['dropzoneOptions']),
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
            options: function () {
                let data = {
                    projectId: this.selectedProjectDetails.projectId,
                    token: this.token
                }
                return this.dropzoneOptions(data)
            },
        },
        methods: {
            ...mapActions('documents', ['loadDocuments']),
            uploadCompleted(file, response) {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                }
                this.loadDocuments(data)
            }
        }
    };
</script>