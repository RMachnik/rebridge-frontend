<template>
    <div>
        <page-title title="Szablony"/>
        <v-card id="projects">

            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-layout align-start column wrap>
                        <v-flex d-flex>
                            <add-question></add-question>
                        </v-flex>
                    </v-layout>
                    <v-layout align-start column wrap>
                        <v-flex d-flex>
                            <questionnaires style="max-height: 500px;overflow-y: scroll;width: 300px"></questionnaires>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-container>
        </v-card>
    </div>
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
