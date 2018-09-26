<template>
    <v-card>
        <v-card-title>
            <v-toolbar flat color="white">
                <v-toolbar-title>
                    <h4>{{room.name}}
                        <v-btn flat color="red" @click="deleteThisRoom">
                            <v-icon small>delete</v-icon>
                        </v-btn>
                    </h4>
                </v-toolbar-title>
                <v-divider
                        class="mx-2"
                        inset
                        vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-text-field
                        label="Kategoria"
                        v-model="newCategory"
                        @keydown.enter="add"
                >
                    <v-fade-transition slot="append">
                        <v-icon
                                v-if="newCategory"
                                @click="add"
                        >
                            add_circle
                        </v-icon>
                    </v-fade-transition>
                </v-text-field>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <category v-for="(category,index) in this.room.categories" :key="index" :category="category"
                      :room-id="room.id"></category>
        </v-card-text>
    </v-card>
</template>

<script>

    import Category from "./Category";
    import {mapActions, mapState} from 'vuex'

    export default {
        components: {Category},
        component: 'Room',
        data: () => ({
            newCategory: ''
        }),
        props: {
            room: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('catalogue', ['catalogue']),
            ...mapState('projects', ['selectedProjectDetails']),
        },
        methods: {
            ...mapActions('catalogue', ['addCategory', 'deleteRoom']),
            deleteThisRoom() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    roomId: this.room.id,
                }
                this.deleteRoom(data);
            },
            add() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    roomId: this.room.id,
                    data: {
                        name: this.newCategory
                    }
                }
                this.addCategory(data).then(() => this.newCategory = '')
            }
        }
    }
</script>