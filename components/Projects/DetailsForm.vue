<template>
    <v-form v-if="selectedProjectDetails">
        <v-layout column wrap>
            <v-divider></v-divider>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.location.streetName"
                        label="Ulica"
                        :readonly="readonly"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.location.number"
                        label="Numer mieszkania"
                        :readonly="readonly"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.location.postalCode"
                        label="Kod pocztowy"
                        :readonly="readonly"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.location.city"
                        label="Miasto"
                        :readonly="readonly"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.budget"
                        type="number"
                        label="Budżet projektu"
                        :readonly="readonly"
                        suffix="zł"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="selectedProjectDetails.surface"
                        type="number"
                        label="Powierzchnia"
                        :readonly="readonly"
                        suffix="m²"
                        @change="submit"
                ></v-text-field>
            </v-flex>
            <v-flex v-if="!readonly">
                <investors :selectedProject="this.selectedProject"/>
            </v-flex>
        </v-layout>
    </v-form>
</template>
<script>
    import {mapActions, mapState} from 'vuex';
    import Investors from './Investors';
    import Subtitle from '../Common/Subtitle'

    export default {
        name: 'ProjectDetails',
        components: {Subtitle, Investors},
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
            ...mapActions('projects', ['updateDetails', 'loadQuestionnaire']),
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
                this.updateDetails(data).then(() => this.loadQuestionnaire(data));
            },
        }
    };
</script>