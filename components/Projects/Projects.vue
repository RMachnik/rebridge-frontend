<template>
    <div>
        <new-project v-if="!error"/>
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
    import NewProject from './NewProject';
    import ProjectTail from './ProjectTail';
    import {mapState} from 'vuex';

    export default {
        name: 'Projects',
        components: {ProjectTail, NewProject},
        computed: {
            ...mapState('projects', ['projects', 'error']),
        },
    };
</script>
