<template>
    <v-flex xs12 sm4>
        <v-card>
            <v-card-media
                    :src="image"
                    height="200px"
            ></v-card-media>
            <v-card-title primary-title>
                <h3 class="headline mb-0">{{ inspiration.name }}</h3>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
                <v-btn flat @click="remove">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-card-title>
            <v-slide-y-transition>
                <div v-show="show">
                    <v-card-actions>
                        <add-comment :inspiration="inspiration"></add-comment>
                        <v-spacer></v-spacer>
                        <dropzone :options="options" :destroyDropzone="true"></dropzone>
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
                                                 :inspiration-id="inspiration.id"
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
    import {mapActions, mapGetters, mapState} from 'vuex'
    import Comment from './Comment'
    import AddComment from "./AddComment"
    import Dropzone from 'nuxt-dropzone'
    import 'nuxt-dropzone/dropzone.css'

    export default {
        name: 'Inspiration',
        components: {
            AddComment,
            Comment,
            Dropzone
        },
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
            ...mapState('projects', ['selectedProjectDetails']),
            ...mapGetters('inspirations', ['dropzoneOptions', 'imageUrl']),
            options: function () {
                let data = {
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id,
                    token: this.token
                }

                let dropzoneOptions = this.dropzoneOptions(data);
                console.log(dropzoneOptions)
                return dropzoneOptions
            },
            image: function () {
                return this.imageUrl(this.inspiration.id)
            },
        },
        methods: {
            ...mapActions('inspirations', ['delete']),
            remove() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id
                }
                this.delete(data)
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