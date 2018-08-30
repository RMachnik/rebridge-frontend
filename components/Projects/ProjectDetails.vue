<template>
    <div v-if="selectedProject">
        <section id="details">
            <v-container fluid grid-list-md>
                <v-layout align-start justify-start row wrap>
                    <v-flex d-flex>
                        <details-form :selectedProject="selectedProject"/>
                    </v-flex>
                    <v-flex d-flex>
                        <chat/>
                    </v-flex>
                </v-layout>
                <v-layout align-start justify-start row wrap>
                    <v-flex d-flex>
                        <v-layout column wrap>
                            <v-flex d-flex>
                                <investor :selectedProject="selectedProject"/>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-start justify-start row wrap>
                    <v-flex d-flex>
                        <v-layout column wrap>
                            <v-flex d-flex>
                                <section id="questionnaire">
                                    <questionnaire :projectId="selectedProject.id"/>
                                </section>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-start justify-start row wrap>
                    <inspirations :inspirations="inspirations"/>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import DetailsForm from './DetailsForm'
    import Questionnaire from './Questionnaire';
    import Investor from './Investor';
    import Chat from './Chat';
    import Inspirations from "../Inspiration/Inspirations";

    export default {
        name: 'ProjectDetails',
        components: {
            Inspirations,
            Questionnaire,
            DetailsForm,
            Investor,
            Chat,
        },
        props: {
            selectedProject: {
                type: Object,
                required: true,
            },
        },
        computed: {
            ...mapState('projects', ['selectedProjectDetails', 'questionnaire']),
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            ...mapState('inspirations', ['inspirations']),
        }
    };
</script>