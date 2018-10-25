<template>
    <v-layout>
        <v-flex>
            <subtitle subtitle="Zestawienie materiałowe"></subtitle>
            <v-toolbar flat color="transparent">
                <v-text-field
                        label="Pomieszczenie"
                        v-model="newRoom"
                        @keydown.enter="add">
                    <v-fade-transition slot="append">
                        <v-icon
                                v-if="newRoom"
                                @click="add"
                        >
                            add_circle
                        </v-icon>
                    </v-fade-transition>
                </v-text-field>
            </v-toolbar>
            <v-flex>
                <room v-for="(room,index) in this.catalogue.rooms" :key="index" :room="room"></room>
            </v-flex>
        </v-flex>
    </v-layout>
</template>

<script>
    import Room from "./Room";
    import Subtitle from "../Common/Subtitle"
    import {mapActions, mapState} from 'vuex'

    export default {
        component: 'Catalogue',
        components: {Subtitle, Room},
        data: () => ({
            newRoom: ''
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('catalogue', ['catalogue']),
            ...mapState('projects', ['selectedProjectDetails']),
        },
        methods: {
            ...mapActions('catalogue', ['addRoom']),
            add() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    data: {
                        name: this.newRoom
                    }
                }
                this.addRoom(data).then(() => this.newRoom = '')
            }
        }
    }
</script>