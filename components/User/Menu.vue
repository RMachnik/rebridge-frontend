<template>
    <div class="text-xs-center" v-if="currentUser">
        <v-badge overlap>
            <span slot="badge">3</span>
            <v-avatar
                    color="cyan red--after"
            >
                <v-icon dark>notifications</v-icon>
            </v-avatar>
        </v-badge>
        <v-menu offset-y>
            <v-avatar color="cyan" slot="activator">
                <v-icon dark>settings</v-icon>
            </v-avatar>
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title class="font-weight-bold">{{currentUser.email}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title class="clickable" @click="redirectToProfile()">Profil</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title class="clickable red--text" color="cyan" @click="logoutAndRedirect">Wyloguj
                    </v-list-tile-title>
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
            ...mapState(
                'user', [
                    'currentUser'
                ]
            )
        },
        methods: {
            ...mapActions('auth', [
                    'logout'
                ]
            ),
            logoutAndRedirect() {
                this.logout()
                    .then(() => {
                        this.$router.push('/')
                    })
            },
            redirectToProfile() {
                this.$router.push('/profile')
            }
        }
    }
</script>
<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>