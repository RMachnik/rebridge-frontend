<template>
    <v-container fluid grid-list-md>
        <v-card>
            <add-project v-if="isArchitect"/>
            <v-layout row wrap>
                <project-tail v-for="(project, index) in this.projects" :key="index" :project="project"/>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    import AddProject from './AddProject';
    import ProjectTail from './ProjectTail';
    import {mapState} from 'vuex';


    export default {
        name: 'Projects',
        components: {ProjectTail, AddProject},
        computed: {
            ...mapState('projects', ['projects']),
            ...mapState('user', ['currentUser']),
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
    };
</script>
