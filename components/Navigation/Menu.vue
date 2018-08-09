<template>
    <div>
        <v-container>
            <v-toolbar color="cyan" dark fixed app>
                <v-toolbar-title>
                    <v-btn flat @click="home">
                        Rebridge
                    </v-btn>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-badge overlap>
                    <span slot="badge">3</span>
                    <v-avatar
                            color="cyan red--after"
                    >
                        <v-icon dark>notifications</v-icon>
                    </v-avatar>
                </v-badge>
                <user-menu/>
            </v-toolbar>
        </v-container>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import UserMenu from "~/components/User/Menu"

    export default {
        name: 'Navigation',
        components: {UserMenu},
        data() {
            return {
                drawer: false,
            }
        },
        computed: {
            ...mapState('auth', [
                    'token',
                ]
            )
        },
        methods: {
            home() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .clickable {
        cursor: pointer;
        hover: rgba(0, 0, 0, 0.04);
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
