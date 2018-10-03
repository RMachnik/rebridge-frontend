<template>
    <section id="projects">
        <projects/>
    </section>
</template>
<script>
    import PageTitle from '~/components/Common/PageTitle';
    import Projects from '~/components/Projects/Projects';

    export default {
        name: 'IndexProjects',
        components: {
            PageTitle,
            Projects,
        },
        watchQuery: ['page'],
        async fetch({store}) {
            await store.dispatch('user/loadUser', store.state.auth.token);
            await store.dispatch('projects/all', store.state.auth.token);
            await store.dispatch('questionnaire/all', store.state.auth.token);
            await store.dispatch('events/load', store.state.auth.token);
        },
    };
</script>
