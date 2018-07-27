<template>
    <div>
        <new-project/>
        <v-layout row wrap>
            <item v-for="(project, index) in this.projects" :key="index" :dataObject="project"/>
        </v-layout>
    </div>
</template>

<script>
    import NewProject from "./NewProject";
    import Item from './Item';
    import {mapState} from 'vuex';

    export default {
        name: "Projects",
        components: {NewProject, Item},
        data: () => ({}),
        computed: {
            ...mapState('project', ['projects'])
        }
    }
</script>
