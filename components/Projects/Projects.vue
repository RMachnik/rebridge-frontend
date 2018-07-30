<template>
    <div>
        <new-project/>
        <v-layout row wrap>
            <project-tail v-for="(project, index) in this.projects" :key="index" :project="project"/>
        </v-layout>
    </div>
</template>

<script>
    import NewProject from './NewProject';
    import ProjectTail from './ProjectTail';
    import {mapState} from 'vuex';

    export default {
        name: 'Projects',
        components: {ProjectTail, NewProject},
        computed: {
            ...mapState('projects', ['projects']),
        },
    };
</script>
