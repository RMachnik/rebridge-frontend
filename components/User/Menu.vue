<template>
    <div class="text-xs-center">
        <v-menu offset-y>
            <v-avatar color="cyan" slot="activator">
                <v-icon dark>settings</v-icon>
            </v-avatar>
            <v-list>
                <v-list-tile >
                    <v-list-tile-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{username}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title>Ustawienia</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title class="logout" color="cyan" @click="logoutAndRedirect">Wyloguj</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'UserMenu',
        computed: {
            ...mapState('auth', [
                    'token', 'username'
                ],
            )
        },
        methods: {
            ...mapActions('auth', [
                    'logout'
                ],
                'user', [
                    'loadUser'
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
        color: red;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>