<template>
    <section id="projects">
        <page-title title="Szablony"/>
        <v-container fluid grid-list-md>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex>
                    <add-question></add-question>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex>
                    <questionnaires></questionnaires>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>
<script>
    import PageTitle from '~/components/Common/PageTitle';
    import Questionnaires from '~/components/Questionnaire/Questionnaires';
    import AddQuestion from "../../components/Questionnaire/AddQuestion";

    export default {
        name: 'IndexProjects',
        components: {
            AddQuestion,
            PageTitle,
            Questionnaires,
        },
        watchQuery: ['page'],
        async fetch({store}) {
            await store.dispatch('user/loadUser', store.state.auth.token);
            await store.dispatch('questionnaire/all', store.state.auth.token);
        },
    };
</script>
