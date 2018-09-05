<template>
    <section id="projects">
        <page-title title="Szablony"/>
        <v-container>
            <v-layout >
                <v-flex flex-d>
                    <questionnaires></questionnaires>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex flex-d>
                    <add-question></add-question>
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
