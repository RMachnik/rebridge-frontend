<template>
    <div v-if="selectedProject">
        <v-container fluid grid-list-md>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex>
                    <details-form :selectedProject="selectedProject"/>
                </v-flex>
                <v-flex d-flex>
                    <chat></chat>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex v-if="isArchitect">
                    <investor :selectedProject="selectedProject"/>
                </v-flex>
                <v-flex d-flex>
                    <questionnaire :projectId="selectedProject.id"/>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <inspirations :inspirations="inspirations"/>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex>
                    <documents></documents>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import DetailsForm from './DetailsForm'
    import Questionnaire from './Questionnaire';
    import Investor from './Investor';
    import Chat from './Chat';
    import Inspirations from "../Inspiration/Inspirations";
    import Documents from "../Documents/Documents";

    export default {
        name: 'ProjectDetails',
        components: {
            Inspirations,
            Questionnaire,
            DetailsForm,
            Investor,
            Chat,
            Documents,
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
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            }
        }
    };
</script>