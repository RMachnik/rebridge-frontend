<template>
    <v-flex style="padding:10px">
        <v-dialog v-model="show" width="600px">
            <v-card
                    hover="true"
                    slot="activator"
                    class="mx-auto"
                    width="344"
            >
                <v-card-title>
                    <div class="font-weight-light grey--text title mb-2">{{inspiration.name}}</div>
                </v-card-title>
                <v-img
                        :aspect-ratio="16/9"
                        :src="image">

                </v-img>

            </v-card>
            <v-card>
                <v-img
                        :src="image"
                ></v-img>
                <v-card-title>
                    <v-rating
                            v-model="newRating"
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
            newRating: 0,
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