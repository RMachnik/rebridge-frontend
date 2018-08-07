<template>
    <v-container v-if="selectedProject">
        <v-form v-if="selectedProjectDetails">
            <v-container>
                <v-layout column wrap>
                    <v-flex>
                        <v-subheader>Kwestionariusz</v-subheader>
                        <questionnaire v-if="!currentUser.roles.includes('ARCHITECT')" :projectId="selectedProject.id"/>
                    </v-flex>
                    <v-flex subheader three-line>
                        <v-subheader>Dane podstawowe</v-subheader>
                        <v-text-field
                                v-model="selectedProjectDetails.budget"
                                label="Budżet projektu"
                                :readonly="readonly"
                        ></v-text-field>
                        <v-text-field
                                v-model="selectedProjectDetails.surface"
                                label="Powierzchnia(metry kwadratowe)"
                                :readonly="readonly"
                        ></v-text-field>
                    </v-flex>
                    <v-flex subheader
                            three-line>
                        <v-subheader>Adres inwestycji</v-subheader>
                        <v-text-field
                                v-model="selectedProjectDetails.location.streetName"
                                label="Ulica"
                                :readonly="readonly"
                        ></v-text-field>
                        <v-text-field
                                v-model="selectedProjectDetails.location.number"
                                label="Numer mieszkania"
                                :readonly="readonly"
                        ></v-text-field>
                        <v-text-field
                                v-model="selectedProjectDetails.location.postalCode"
                                label="Kod pocztowy"
                                :readonly="readonly"
                        ></v-text-field>
                        <v-text-field
                                v-model="selectedProjectDetails.location.city"
                                label="Miasto"
                                :readonly="readonly"
                        ></v-text-field>
                    </v-flex>
                    <v-flex subheader
                            three-line v-if="!readonly">
                        <v-subheader>Inwestorzy</v-subheader>
                        <add-investor :projectId="selectedProject.id"/>
                        <contact-details v-for="(investor,index) in selectedProjectDetails.investors"
                                         :investor="investor" :projectId="selectedProject.id" :key="index"/>
                    </v-flex>
                    <v-flex v-if="currentUser.roles.includes('ARCHITECT')">
                        <v-btn @click="submit()" color="success">
                            Zapisz
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import AddInvestor from './AddInvestor';
    import Questionnaire from './Questionnaire';
    import ContactDetails from './ContactDetails';

    export default {
        name: 'ProjectDetails',
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
        }),

        computed: {
            ...mapState('projects', ['selectedProjectDetails', 'questionnaire']),
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            readonly: function()  {
                if (this.currentUser) {
                    return !this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
        methods: {
            ...mapActions('projects', ['updateDetails']),
            submit() {
                let location = {
                    streetName: this.selectedProjectDetails.location.streetName,
                    number: this.selectedProjectDetails.location.number,
                    postalCode: this.selectedProjectDetails.location.postalCode,
                    city: this.selectedProjectDetails.location.city,
                };
                let data = {
                    token: this.token,
                    projectId: this.selectedProject.id,
                    data: {
                        budget: this.selectedProjectDetails.budget,
                        surface: this.selectedProjectDetails.surface,
                        location: location,
                    },
                };
                this.updateDetails(data).then(
                    this.$router.go(-1)
                );
            },
        }
    };
</script>