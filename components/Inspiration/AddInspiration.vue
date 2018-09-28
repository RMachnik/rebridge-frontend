<template>
    <v-flex>
        <v-card hover="true"
                max-width="344">
            <dropzone
                    id="addInspiration"
                    :options="options"
                    :destroyDropzone="true"
                    @vdropzone-success="uploadCompleted"
            ></dropzone>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';
    import Dropzone from 'nuxt-dropzone'
    import 'nuxt-dropzone/dropzone.css'

    export default {
        name: 'AddInspiration',
        components: {Dropzone},
        computed: {
            ...mapState('auth', ['token']),
            ...mapGetters('inspirations', ['dropzoneOptions']),
            ...mapState('projects', ['selectedProjectDetails']),
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
            ...mapActions('inspirations', ['all']),
            uploadCompleted(file, response) {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                }
                this.all(data)
            }
        }
    };
</script>