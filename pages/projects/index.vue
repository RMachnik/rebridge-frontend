<template>
    <section class="container">
        <page-title title="Projekty"/>
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
        }, async fetch({store}) {
            await store.dispatch('projects/all', store.state.auth.token);
            await store.dispatch('questionnaire/all', store.state.auth.token);
        },
    };
</script>
