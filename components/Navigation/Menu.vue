<template>
    <div v-if="isLogged">
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
            <v-toolbar-title>Application</v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'Navigation',
        data () {
            return {
                drawer: false
            }
        },
        computed: {
            ...mapState('auth', [
                'isLogged'
            ])
        }
    }
</script>

<style scoped>
    .v-list-tile:hover {
        background: rgba(0,0,0,0.04);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
</style>