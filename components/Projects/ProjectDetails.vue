<template>
    <div v-if="selectedProject">
        <v-container fluid grid-list-md>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="projectDetails">
                    <details-form :selectedProject="selectedProject"/>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="survey">
                    <survey :projectId="selectedProject.id"/>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="inspirations">
                    <inspirations :inspirations="inspirations"/>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="documentation">
                    <documents></documents>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="catalogue">
                    <catalogue></catalogue>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-start row wrap>
                <v-flex d-flex id="chat">
                    <chat></chat>
                </v-flex>
            </v-layout>
            <project-navigation></project-navigation>
        </v-container>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import DetailsForm from './DetailsForm'
    import Survey from './Survey';
    import Chat from './Chat';
    import ProjectNavigation from './ProjectNavigation';
    import Inspirations from "../Inspiration/Inspirations";
    import Documents from "../Documents/Documents";
    import Catalogue from "../Catalogue/Catalogue";

    export default {
        name: 'ProjectDetails',
        components: {
            Catalogue,
            Inspirations,
            Survey,
            DetailsForm,
            Chat,
            Documents,
            ProjectNavigation
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