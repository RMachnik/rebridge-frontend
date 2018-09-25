<template>
    <section v-if="selected">
        <section id="header">
            <page-title :title="selected.name"/>
        </section>
        <section id="details">
            <project-details :selectedProject="selected"/>
        </section>
    </section>
</template>

<script>
    import ProjectDetails from '~/components/Projects/ProjectDetails';
    import PageTitle from '~/components/Common/PageTitle';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            ProjectDetails,
            PageTitle,
        },
        data: () => ({
        }),
        computed: {
            ...mapGetters('projects', ['find']),
            selected: function () {
                return this.find(this.$route.params.id);
            },
        },
        methods: {
            return() {
                this.$router.go(-1)
            }
        }
    };
</script>