<template>
    <v-flex>
        <v-card
                :hover=hover
                width="344"
                class="mx-auto"
        >
            <v-card-title class="clickable" @click="redirectToProject(project.id)">
                <h3>{{ project.name }}</h3>
                <v-btn red flat @click="remove(project)" v-if="isArchitect">
                    <v-icon red color="red" small>delete</v-icon>
                </v-btn>
            </v-card-title>
            <v-img class="clickable" @click="redirectToProject(project.id)"
                   :src="image"
                   aspect-ratio="1.6"
            ></v-img>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    export default {
        name: 'ProjectTail',
        props: {
            project: {
                type: Object,
                required: true,
            },
        },
        data: () => ({
            show: false,
            hover:true
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            ...mapGetters('projects', ['imageUrl']),
            image: function () {
                return this.imageUrl(this.project.id)
            },
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
        methods: {
            ...mapActions('projects', ['loadDetails', 'delete', 'loadQuestionnaire', 'loadChat']),
            ...mapActions('documents', ['loadDocuments']),
            ...mapActions('inspirations', ['all']),
            ...mapActions('catalogue', ['loadCatalogue']),
            redirectToProject(id) {
                let data = {projectId: id, token: this.token};
                this.loadDetails(data)
                    .then(() => this.loadQuestionnaire(data))
                    .then(() => this.all(data))
                    .then(() => this.loadChat(data))
                    .then(() => this.loadDocuments(data))
                    .then(() => this.loadDocuments(data))
                    .then(() => this.loadCatalogue(data))
                    .then(() => {
                        this.$router.push('/projects/' + id);
                    }).catch((error) => {
                });

            },
            remove(project) {
                let data = {token: this.token, project: project};
                this.delete(data);
            },
        },
    }
    ;
</script>

<style scoped>
    .clickable:hover {
        background: rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }
</style>