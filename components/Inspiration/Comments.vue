<template>
    <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content
                v-for="(comment,i) in comments"
                :key="i"
                expand-icon="mdi-menu-down"
        >
            <div slot="header">
                <v-chip v-if=canDelete(comment)>Ty:</v-chip>
                <v-chip v-else>{{comment.author.split("@")[0]}}:</v-chip>
                {{comment.content}}
            </div>
            <v-card>
                <v-card-text class="grey lighten-3">
                    {{comment.content}}
                    <v-btn v-if="canDelete(comment)" flat color="red" small @click="remove(comment.id)">
                        <v-icon small>delete</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-actions>

                </v-card-actions>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Comments',
        props: {
            comments: {
                type: Array,
                required: true
            },
            inspirationId: {
                type: String,
                required: true
            },
            panel: [true, true, true]
        },
        computed: {
            ...mapState('projects', ['selectedProjectDetails']),
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
        },
        methods: {
            ...mapActions('inspirations', ['deleteComment']),
            canDelete: function (comment) {
                return comment.author === this.currentUser.email
            },
            remove(commentId) {
                let data = {
                    token: this.token,
                    inspirationId: this.inspirationId,
                    projectId: this.selectedProjectDetails.projectId,
                    commentId: commentId
                }
                this.deleteComment(data)
            }
        }
    }
</script>