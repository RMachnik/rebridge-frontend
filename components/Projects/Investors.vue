<template>
    <div v-if="isArchitect">
        <add-investor></add-investor>
        <v-layout row wrap>
        <contact-details
                v-for="(investor,index) in this.selectedProjectDetails.investors"
                :investor="investor" :projectId="selectedProject.id" :key="index"/>
        </v-layout>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import AddInvestor from './AddInvestor';
    import ContactDetails from './ContactDetails';

    export default {
        name: 'Investors',
        components: {
            ContactDetails,
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
            ...mapState('projects', ['selectedProjectDetails']),
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