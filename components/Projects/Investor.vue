<template>
    <v-card v-if="!readonly">
        <v-card-title>
            <h3>Inwestorzy</h3>
            <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-title>
        <v-slide-y-transition>
            <div v-show="show">
                <v-layout row wrap>
                    <v-layout column wrap>
                        <v-card-actions>
                            <add-investor></add-investor>
                        </v-card-actions>
                    </v-layout>
                    <v-layout column wrap>
                        <v-card-text>
                            <contact-details
                                    v-for="(investor,index) in selectedProjectDetails.investors"
                                    :investor="investor" :projectId="selectedProject.id" :key="index"/>
                        </v-card-text>
                    </v-layout>
                </v-layout>
            </div>
        </v-slide-y-transition>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex';
    import DetailsForm from './DetailsForm'
    import AddInvestor from './AddInvestor';
    import Questionnaire from './Questionnaire';
    import ContactDetails from './ContactDetails';

    export default {
        name: 'Investor',
        components: {
            ContactDetails,
            Questionnaire,
            AddInvestor,
            DetailsForm
        },
        props: {
            selectedProject: {
                type: Object,
                required: true,
            },
        },
        data: () => ({
            selectedInvestor: null,
            show: false
        }),

        computed: {
            ...mapState('projects', ['selectedProjectDetails', 'questionnaire']),
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            readonly: function () {
                if (this.currentUser) {
                    return !this.currentUser.roles.includes('ARCHITECT');
                }
            },
        }
    };
</script>
<style scoped>
    .scrollable {
        overflow-y: scroll;
        height: 212px;
    }
</style>