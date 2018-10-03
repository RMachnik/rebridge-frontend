<template>
    <v-layout row wrap>
        <empty-project-tail></empty-project-tail>
        <project-tail v-for="(project, index) in this.projects" :key="index" :project="project"/>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex';
    import EmptyProjectTail from "./EmptyProjectTail";
    import ProjectTail from './ProjectTail';

    export default {
        name: 'Projects',
        components: {EmptyProjectTail, ProjectTail},
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
