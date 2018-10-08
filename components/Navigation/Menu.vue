<template>
    <div id="menu">
        <v-container>
            <v-toolbar dark fixed app clipped-left>
                <v-toolbar-side-icon v-if="currentUser" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>
                    <v-btn flat @click="home">
                        Rebridge
                    </v-btn>
                </v-toolbar-title>
                <events></events>
            </v-toolbar>
        </v-container>
        <v-navigation-drawer v-if="currentUser"
                             v-model="drawer"
                             fixed
                             left
                             app
                             clipped
                             :mini-variant=miniVariant
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon>mood</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{currentUser.email}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <user-menu/>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import Events from "~/components/User/Events"
    import UserMenu from "~/components/User/Menu";
    import {mapState} from 'vuex'

    export default {
        name: 'Navigation',
        components: {UserMenu, Events},
        data() {
            return {
                drawer: false,
                miniVariant: true,
            }
        },
        computed: {
            ...mapState('user', ['currentUser'])
        },
        methods: {
            home() {
                this.$router.push('/projects')
            }
        }
    }
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    }
</style>
