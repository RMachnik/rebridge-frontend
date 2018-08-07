<template>
    <v-flex xs12 sm4 class="item pa-2">
        <v-card>
            <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
            ></v-card-media>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ project.name }}</h3>
                    <div v-if="project.details">
                        <div v-if="project.details.budget>0">Budżet: {{project.details.budget}} PLN</div>
                        <div v-if="project.details.surface>0">Powierzchnia: {{project.details.surface}} m<sup>2</sup>
                        </div>
                        <div v-if="project.details.location">
                            <div v-if="project.details.location.streetName">Adres:
                                {{project.details.location.streetName}},
                                {{project.details.location.city}}
                            </div>
                        </div>
                    </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange" @click="redirectToProject(project.id)">Otwórz</v-btn>
                <v-btn flat color="red" @click="remove(project)">delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'ProjectTail',
        props: {
            project: {
                type: Object,
                required: true,
            },
        },
        computed: {
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('projects', ['loadDetails', 'delete', 'loadQuestionnaire']),
            redirectToProject(id) {
                let data = {projectId: id, token: this.token};
                this.loadDetails(data).then(
                    () => this.loadQuestionnaire(data),
                ).then(() => {
                    this.$router.push('/projects/' + id);
                }).catch((error) => {
                });

            },
            remove(project) {
                let data = {token: this.token, project: project};
                this.delete(data);
            },
        },
    };
</script>

<style scoped>

</style>