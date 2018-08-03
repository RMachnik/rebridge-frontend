<template>
    <section class="container">
        <page-title title="Projekty"/>
        <project-details :selectedProject="selected"/>
    </section>
</template>

<script>
    import PageTitle from '~/components/Common/PageTitle';
    import ProjectDetails from '~/components/Projects/ProjectDetails';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            PageTitle,
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