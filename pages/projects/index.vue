<template>
    <section class="container">
        <page-title title="Projekty"/>
        <projects/>
    </section>
</template>
<script>
    import PageTitle from '~/components/Common/PageTitle'
    import Projects from '~/components/Projects/Projects'

    export default {
        name: 'IndexProjects',
        components: {
            PageTitle,
            Projects
        }
    }
</script>
