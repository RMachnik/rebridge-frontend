<template>
    <v-flex>
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    width="344"
            >
                <v-img class="clickable" @click="redirectToProject(project.id)"
                       :src="image"
                       height="200px"
                ></v-img>
                <v-card-title class="clickable" @click="redirectToProject(project.id)">
                    <h3>{{ project.name }}</h3>
                </v-card-title>
                <v-card-actions class="justify-end">
                    <v-btn red flat @click="remove(project)" v-if="isArchitect">
                        <v-icon red color="red">delete</v-icon>
                    </v-btn>
                    <v-btn icon v-if="hasDetails" @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                    <v-card-text v-show="show">
                        <span class="font-weight-light grey--text  mb-2">
                        <div v-if="project.details.budget>0">Budżet: {{project.details.budget}} PLN</div>
                        <div v-if="project.details.surface>0">Powierzchnia: {{project.details.surface}} m<sup>2</sup>
                            <div v-if="project.details.location">
                                <div v-if="project.details.location.streetName">Adres:
                                    {{project.details.location.streetName}} {{project.details.location.number}},
                                    {{project.details.location.city}}
                                </div>
                            </div>
                        </div>
                        </span>
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
        </v-hover>
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
            show: false
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
            hasDetails: function () {
                return (this.project.details.budget > 0 ||
                    this.project.details.surface > 0 ||
                    this.project.details.location.streetName ||
                    this.project.details.location.city)
            }
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