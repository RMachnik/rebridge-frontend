<template>
    <v-flex>
        <v-card
                hover="true"
                max-width="344">
            <v-img
                    aspect-ratio="1.6"
                    :src="image"
            ></v-img>
            <v-card-title>
                <span class="font-weight-light grey--text title mb-2">{{inspiration.name}}</span>
                <v-rating
                        v-model="newRating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$vuetify.icons.ratingFull"
                        half-increments
                        hover
                        @click.native="changeRating"
                ></v-rating>
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
                <div v-show="show" class="scrollable">
                    <v-card-text>
                        <v-spacer></v-spacer>
                        <v-layout row>
                            <v-flex>
                                <v-card>
                                    <div v-if="inspiration.details.comments.length>0">
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
    </v-flex>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    import Comments from './Comments'
    import AddComment from "./AddComment"

    import Rating from 'v-rating'

    export default {
        name: 'Inspiration',
        components: {
            AddComment,
            Comments,
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
            ...mapGetters('inspirations', ['imageUrl']),
            image: function () {
                return this.imageUrl(this.inspiration.id)
            },
        },
        methods: {
            ...mapActions('inspirations', ['all', 'delete', 'update']),
            remove() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id
                }
                this.delete(data)
            },
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
        max-height: 200px;
    }
</style>