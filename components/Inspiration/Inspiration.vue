<template>
    <v-flex xs12 sm4>
        <v-hover>
            <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    width="344">
                <v-img
                        :src="image"
                ></v-img>
                <v-card-title>
                    <span class="headline">{{inspiration.name}}</span>
                    <v-rating
                            v-model="newRating"
                            color="yellow darken-3"
                            background-color="grey darken-1"
                            empty-icon="$vuetify.icons.ratingFull"
                            half-increments
                            hover
                            @click.native="changeRating"
                    ></v-rating>
                    <span class="grey--text text--lighten-2 caption mr-2">
                      ({{ inspiration.details.rating }})
                </span>
                </v-card-title>
                <v-card-actions class="justify-end">
                    <v-btn flat color="red" @click="remove">
                        <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                    <div v-show="show">
                        <v-card-actions>
                            <dropzone
                                    id="inspiration"
                                    ref="dropzone"
                                    :options="options"
                                    :destroyDropzone="true"
                                    @vdropzone-success="uploadCompleted"
                            ></dropzone>
                        </v-card-actions>
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <v-layout row>
                                <v-flex flex-d>
                                    <v-card>
                                        <div v-if="inspiration.details.comments.length>0" class="scrollable">
                                            <comments :comments="inspiration.details.comments"
                                                      :inspirationId="inspiration.id"/>
                                        </div>
                                        <add-comment :inspiration="inspiration"></add-comment>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </div>
                </v-slide-y-transition>
            </v-card>
        </v-hover>
    </v-flex>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    import Comments from './Comments'
    import AddComment from "./AddComment"
    import Dropzone from 'nuxt-dropzone'
    import 'nuxt-dropzone/dropzone.css'
    import Rating from 'v-rating'

    export default {
        name: 'Inspiration',
        components: {
            AddComment,
            Comments,
            Dropzone,
            Rating
        },
        props: {
            inspiration: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            comment: '',
            show: false,
            newRating: 0,
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
                return this.dropzoneOptions(data);
            },
            image: function () {
                return this.imageUrl(this.inspiration.id)
            },
        },
        methods: {
            ...
                mapActions('inspirations', ['all', 'delete', 'update']),
            remove() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id
                }
                this.delete(data)
            }
            ,
            uploadCompleted(file, response) {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id
                }
                this.all(data)
            }
            ,
            changeRating() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id,
                    data: {
                        rating: this.newRating
                    }
                }
                this.update(data)
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