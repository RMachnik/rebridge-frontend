<template>
    <div>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>{{ comment.content }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ comment.author }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ comment.creationDate }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-btn flat small @click="remove">
                    <v-icon small>delete</v-icon>
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
        <v-divider class="mt-2"></v-divider>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Comment',
        props: {
            comment: {
                type: Object,
                required: true
            },
            inspirationId: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState('projects', ['selectedProjectDetails']),
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('inspirations', ['deleteComment']),
            remove() {
                let data = {
                    token: this.token,
                    inspirationId: this.inspirationId,
                    projectId: this.selectedProjectDetails.projectId,
                    commentId: this.comment.id
                }
                this.deleteComment(data)
            }
        }
    }
</script>

<style scoped>
</style>