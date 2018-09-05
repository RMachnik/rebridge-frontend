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
                <user-menu/>
            </v-toolbar>
        </v-container>
    </div>
</template>

<script>
    import UserMenu from "~/components/User/Menu"

    export default {
        name: 'Navigation',
        components: {UserMenu},
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
