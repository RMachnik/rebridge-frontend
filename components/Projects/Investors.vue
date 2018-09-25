<template>
    <v-card v-if="isArchitect">
        <v-card-title>
            <h3>Inwestorzy</h3>
            <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-title>
        <v-slide-y-transition>
            <div v-show="show">
                <v-card-text>
                    <contact-details
                            v-for="(investor,index) in selectedProjectDetails.investors"
                            :investor="investor" :projectId="selectedProject.id" :key="index"/>
                    <add-investor></add-investor>
                </v-card-text>
            </div>
        </v-slide-y-transition>

    </v-card>
</template>

<script>
    import {mapState} from 'vuex';
    import AddInvestor from './AddInvestor';
    import Questionnaire from './Questionnaire';
    import ContactDetails from './ContactDetails';

    export default {
        name: 'Investors',
        components: {
            ContactDetails,
            Questionnaire,
            AddInvestor,
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
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        }
    };
</script>