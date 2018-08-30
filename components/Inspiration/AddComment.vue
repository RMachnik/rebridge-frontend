<template>
    <v-layout column wrap>
        <v-flex>
            <v-text-field
                    solo
                    label="Komentarz"
                    v-model="comment"
                    required
            >
            </v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex>
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
                this.addComment(data);
            }
        }
    }
</script>

<style scoped>
</style>