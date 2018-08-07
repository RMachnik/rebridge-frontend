<template>
    <div>
        <add-project v-if="!error"/>
        <v-layout row wrap>
            <project-tail v-for="(project, index) in this.projects" :key="index" :project="project"/>
        </v-layout>
        <v-alert
                :value="true"
                color="error"
                icon="warning"
                outline
                v-if="error">
            {{error}}
        </v-alert>
    </div>
</template>

<script>
    import AddProject from './AddProject';
    import ProjectTail from './ProjectTail';
    import {mapState} from 'vuex';

    export default {
        name: 'Projects',
        components: {ProjectTail, AddProject},
        computed: {
            ...mapState('projects', ['projects', 'error']),
        },
    };
</script>
