<template>
    <section class="container">
        <page-title title="ProjectDetails"/>
        <div>{{$route.params.id}}</div>
        <div>{{this.currentProject.budget}}</div>
    </section>
</template>

<script>
    import PageTitle from '~/components/Common/PageTitle';
    import {mapState} from 'vuex';

    export default {
        name: 'ProjectDetails',
        components: {
            PageTitle,
        }, computed: {
            ...mapState('projects', ['currentProject']),
        },
    };
</script>