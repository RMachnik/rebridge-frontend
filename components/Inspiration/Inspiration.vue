<template>
    <v-flex xs4>
        <div>
            <v-hover>
                <v-card flat
                        tile
                        class="d-flex"
                        slot-scope="{ hover }"
                        max-width="100%"
                        :hover="true"
                >
                    <v-img
                            :src=image
                            aspect-ratio="1"
                            class="grey lighten-2"
                            @click="show = true"
                    >
                        <v-expand-transition>
                            <div
                                    v-if="hover"
                                    class="font-weight-light white--text title mb-2"
                            >
                                {{inspiration.name}}
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-card>
            </v-hover>
            <v-dialog v-model="show" width="600px">
                <v-card>
                    <v-img
                            :src="image"
                    ></v-img>
                    <v-card-title>
                        <v-rating
                                :v-model="inspiration.details.rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="$vuetify.icons.ratingFull"
                                half-increments
                                hover
                                @click.native="changeRating"
                        ></v-rating>
                        <span class="font-weight-light grey--text title mb-2">{{inspiration.name}}</span>
                        <v-btn small flat color="red" @click="remove">
                            <v-icon small>delete</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <div v-if="inspiration.details.comments.length>0">
                            <comments :comments="inspiration.details.comments"
                                      :inspirationId="inspiration.id"/>
                        </div>
                        <add-comment :inspiration="inspiration"></add-comment>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
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
                required:
                    true
            }
        },
        data: () => ({
            comment: '',
            show: false,
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails']),
            ...mapGetters('inspirations', ['imageUrl']),
            image:
                function () {
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
            },
            changeRating() {
                console.log(this.inspiration.details.rating)
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    inspirationId: this.inspiration.id,
                    data: {
                        rating: this.inspiration.details.rating
                    }
                }
                this.update(data)
            }
        }
    }
</script>