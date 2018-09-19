<template>
    <v-card>
        <v-card-title>
            <v-toolbar flat color="white">
                <v-toolbar-title>
                    <h3>Katalog produktów</h3>
                </v-toolbar-title>
                <v-divider
                        class="mx-2"
                        inset
                        vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-text-field label="Pokój" v-model="newRoom" required></v-text-field>
                <v-btn color="primary" @click="add">
                    Nowy Pokój
                </v-btn>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <room v-for="(room,index) in this.catalogue.rooms" :key="index" :room="room"></room>
        </v-card-text>
    </v-card>
</template>

<script>
    import Room from "./Room";
    import {mapActions, mapState} from 'vuex'

    export default {
        components: {Room},
        component: 'Catalogue',
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