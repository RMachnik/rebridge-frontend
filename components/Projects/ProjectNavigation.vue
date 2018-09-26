<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            clipped
            app
    >
        <v-list v-for="(link,index) in links" :link="link" :key="index">
            <v-list-tile
            >
                <v-list-tile-title @click="$vuetify.goTo(link.selector,options)">{{link.label}}</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        component: "ProjectNavigation",
        data() {
            return {
                drawer: true,
                options: {offset: -70},
                links: [
                    {
                        selector: "#projectDetails",
                        label: 'Dane'
                    },
                    {
                        selector: "#survey",
                        label: 'Ankieta'
                    },
                    {
                        selector: "#inspirations",
                        label: 'Inspiracje'
                    },
                    {
                        selector: "#documentation",
                        label: 'Dokumentacja'
                    },
                    {
                        selector: "#catalogue",
                        label: 'Dokumentacja materialowa'
                    },
                    {
                        selector: "#chat",
                        label: 'Czat'
                    }]
            }
        }
    }
</script>