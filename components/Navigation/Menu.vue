<template>
    <div v-if="token">
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-list dense>
                <v-list-tile class="v-list-tile">
                    <v-list-tile-action>
                        <v-icon>info</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <nuxt-link to="/information">Informacje</nuxt-link>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="v-list-tile">
                    <v-list-tile-action>
                        <v-icon>wb_incandescent</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <nuxt-link to="/inspiration">Inspiracje</nuxt-link>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="v-list-tile">
                    <v-list-tile-action>
                        <v-icon>insert_photo</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <nuxt-link to="/project">Projekt</nuxt-link>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="v-list-tile">
                    <v-list-tile-action>
                        <v-icon>hotel</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <nuxt-link to="/rooms">Pomieszczenia</nuxt-link>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="v-list-tile">
                    <v-list-tile-action>
                        <v-icon>insert_comment</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <nuxt-link to="/rooms">Czat</nuxt-link>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="cyan" dark fixed app>
            <v-spacer></v-spacer>
            <v-toolbar-title>{{username}}</v-toolbar-title>
            <v-toolbar-title class="logout" @click="logoutAndRedirect()"> Wyloguj się</v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Navigation',
        data() {
            return {
                drawer: false
            }
        },
        computed: {
            ...mapState('auth', [
                'token', 'username'
            ])
        },
        methods: {
            ...mapActions('auth', [
                'logout'
            ]),
            logoutAndRedirect() {
                this.logout()
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        }
    }
</script>

<style scoped>
    .v-list-tile:hover {
        background: rgba(0, 0, 0, 0.04);
    }

    .logout {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
