<template>
    <v-layout row wrap>
        <v-flex>
            <v-text-field
                    solo
                    label="Komentarz"
                    v-model="comment"
                    required
                    @keydown.enter="add"
            >
                <v-fade-transition slot="append">
                    <v-icon
                            v-if="comment"
                            @click="add"
                    >
                        add_circle
                    </v-icon>
                </v-fade-transition>
            </v-text-field>
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