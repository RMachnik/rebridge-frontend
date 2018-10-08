<template>
    <v-container style="width:1000px;">
        <page-title title="Kwestionariusze"/>
        <v-layout column wrap>
            <v-layout row wrap>
                <v-flex d-flex>
                    <add-question></add-question>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <questionnaires style="max-height: 500px;overflow-y: scroll;width: 300px"></questionnaires>
            </v-layout>
        </v-layout>
    </v-container>
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
