<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            clipped
            app
            mini-variant="true"
    >
        <v-list v-for="(link,index) in links" :link="link" :key="index">
            <v-list-tile @click="$vuetify.goTo(link.selector,options)">
                <v-list-tile-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-tile-action>
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
                        label: 'Dane',
                        icon: 'info'
                    },
                    {
                        selector: "#survey",
                        label: 'Ankieta',
                        icon: 'question_answer'
                    },
                    {
                        selector: "#inspirations",
                        label: 'Inspiracje',
                        icon: 'photo_library'
                    },
                    {
                        selector: "#documentation",
                        label: 'Dokumentacja',
                        icon: 'folder'
                    },
                    {
                        selector: "#catalogue",
                        label: 'Dokumentacja materialowa',
                        icon: 'list'
                    },
                    {
                        selector: "#chat",
                        label: 'Czat',
                        icon: 'chat'
                    }]
            }
        },
        mini: true
    }
</script>