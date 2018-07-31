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
                    <div>{{project.id}}</div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange" @click="redirectToProject(project.id)">Otwórz</v-btn>
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
            ...mapActions('projects', ['loadDetails']),
            redirectToProject(id) {
                console.log(this.project);
                var data = {projectId: id, token: this.token};
                this.loadDetails(data).then(() => {
                    this.$router.push('/projects/' + id);
                }).catch((error) => {});

            },
        },
    };
</script>

<style scoped>

</style>