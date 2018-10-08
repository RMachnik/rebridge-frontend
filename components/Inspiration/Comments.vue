<template>
    <v-list two-lines>
        <template v-for="(item,index) in comments">
            <v-list-tile hover="true"
                         :key="item.content"
                         avatar
            >
                <v-list-tile-avatar v-if="item.author!=currentUser.email">
                    <v-chip small>{{item.author.split("@")[0]}}</v-chip>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-sub-title>{{item.content}}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-avatar v-if="item.author===currentUser.email">
                    <v-chip small>{{item.author.split("@")[0]}}</v-chip>
                </v-list-tile-avatar>
            </v-list-tile>
            <v-divider
                    v-if="index + 1 < comments.length"
                    :key="index"
            ></v-divider>
        </template>
    </v-list>
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