<template>
    <v-form v-if="selectedProjectDetails">
        <v-card>
            <v-card-title>
                <h3>Dane o projekcie</h3>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-layout column wrap>
                            <v-flex d-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.location.streetName"
                                        label="Ulica"
                                        :readonly="readonly"
                                ></v-text-field>
                            </v-flex>
                            <v-flex d-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.location.number"
                                        label="Numer mieszkania"
                                        :readonly="readonly"
                                ></v-text-field>
                            </v-flex>
                            <v-flex d-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.location.postalCode"
                                        label="Kod pocztowy"
                                        :readonly="readonly"
                                ></v-text-field>
                            </v-flex>
                            <v-flex d-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.location.city"
                                        label="Miasto"
                                        :readonly="readonly"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex d-flex>
                        <v-layout column wrap>
                            <v-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.budget"
                                        type="number"
                                        label="Budżet projektu"
                                        :readonly="readonly"
                                        suffix="zł"
                                ></v-text-field>
                            </v-flex>
                            <v-flex d-flex>
                                <v-text-field
                                        v-model="selectedProjectDetails.surface"
                                        type="number"
                                        label="Powierzchnia"
                                        :readonly="readonly"
                                        suffix="m²"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-flex d-flex>
                    <v-btn v-if="!readonly" @click="submit()" color="success">
                        Zapisz
                    </v-btn>
                </v-flex>
            </v-card-actions>
            <v-flex d-flex v-if="!readonly">
                <investors :selectedProject="this.selectedProject"/>
            </v-flex>
        </v-card>
    </v-form>
</template>
<script>
    import {mapActions, mapState} from 'vuex';
    import Investors from '~/Components/Projects/Investors';

    export default {
        name: 'ProjectDetails',
        components: {Investors},
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
            readonly: function () {
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
                this.updateDetails(data);
            },
        }
    };
</script>