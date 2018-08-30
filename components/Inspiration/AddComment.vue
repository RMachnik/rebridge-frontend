<template>
    <v-layout row wrap>
        <v-flex flex-d>
            <v-text-field
                    solo
                    label="Komentarz"
                    v-model="comment"
                    required
            >
            </v-text-field>
        </v-flex>
        <v-flex flex-d>
            <v-btn @click="add" color="success">
                Dodaj
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'AddComment',
        props: {
            inspiration: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            comment: ''
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails'])
        },
        methods: {
            ...mapActions('inspirations', ['addComment']),
            add() {
                let data = {
                    token: this.token,
                    inspirationId: this.inspiration.id,
                    projectId: this.selectedProjectDetails.projectId,
                    data: {
                        content: this.comment
                    }
                }
                this.addComment(data).then(() => this.comment = '');
            }
        }
    }
</script>

<style scoped>
</style>