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
    export default {
        name: 'ProjectTail',
        props: {
            project: {
                type: Object,
                required: true,
            },
        },
        methods: {
            redirectToProject(id) {
                console.log(this.project)
                this.$router.push('/projects/' + id);
            },
        },
    };
</script>

<style scoped>

</style>