<template v-if="currentUser">
    <v-list>
        <v-list-tile v-show="isArchitect">
            <v-list-tile-action>
                <add-project-menu></add-project-menu>
            </v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="redirectToProjects()">
            <v-list-tile-action>
                <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Projekty
            </v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-show="isArchitect" @click="questionnaireTemplates()">
            <v-list-tile-action>
                <v-icon>list</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Kwestionariusze
            </v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="redirectToProfile()">
            <v-list-tile-action>
                <v-icon>account_box</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Twoje dane
            </v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logoutAndRedirect">
            <v-list-tile-action>
                <v-icon color="red">power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Wyloguj
            </v-list-tile-title>
        </v-list-tile>
    </v-list>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import AddProjectMenu from "./AddProjectMenu";

    export default {
        name: 'UserMenu',
        components: {AddProjectMenu},
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
            },
            redirectToProjects() {
                this.$router.push('/projects')
            }
        }
    }
</script>