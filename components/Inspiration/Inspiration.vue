<template>
    <v-flex xs12 sm4>
        <v-card>
            <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
            ></v-card-media>
            <v-card-title primary-title>
                <h3 class="headline mb-0">{{ inspiration.name }}</h3>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-slide-y-transition>
                <div v-show="show">
                    <v-card-actions>
                        <v-layout column wrap>
                            <v-flex>
                                <v-textarea
                                        solo
                                        auto-grow
                                        label="Komentarz"
                                        v-model="comment"
                                        required
                                >
                                </v-textarea>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex>
                                <v-btn @click="add" color="success">
                                    Dodaj
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-actions>
                    <v-card-text>
                        <v-spacer></v-spacer>
                        <v-layout row>
                            <v-flex flex-d>
                                <v-card>
                                    <v-list two-line v-if="inspiration.details.comments.length>0"
                                            class="scrollable">
                                        <comment v-for="(comment,index) in inspiration.details.comments"
                                                 :comment="comment"
                                                 :key="index"></comment>
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </div>
            </v-slide-y-transition>
        </v-card>
    </v-flex>
</template>

<script>
    import Comment from './Comment'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Inspiration',
        components: {Comment},
        props: {
            inspiration: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            comment: '',
            show: false
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
    .scrollable {
        overflow-y: scroll;
        height: 215px;
    }
</style>