<template>
    <div class="text-xs-center" v-if="currentUser">
        <events></events>
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
                    <v-list-tile-title class="clickable" @click="redirectToProfile()">Profil
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-show="isArchitect">
                    <v-list-tile-title class="clickable" @click="questionnaireTemplates()">Kwestionariusz
                    </v-list-tile-title>
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
    import Events from "./Events";

    export default {
        name: 'UserMenu',
        components: {Events},
        computed: {
            ...mapState(
                'user', [
                    'currentUser'
                ]
            ),
            isArchitect: function () {
                return this.currentUser.roles.includes('ARCHITECT');
            }
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
            },
            questionnaireTemplates() {
                this.$router.push('/questionnaire')
            }
        }
    }
</script>
<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>