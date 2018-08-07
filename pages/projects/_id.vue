<template>
    <section class="container">
        <H1>Projekt: {{selected.name}}</H1>
        <project-details :selectedProject="selected"/>
    </section>
</template>

<script>
    import ProjectDetails from '~/components/Projects/ProjectDetails';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            ProjectDetails,
        },
        computed: {
            ...mapGetters('projects', ['find']),
            selected: function() {
                return this.find(this.$route.params.id);
            },
        },
    };
</script>