<template>
    <v-container>
        <page-title title="ProjectDetails"/>
        <div>{{$route.params.id}}</div>
        <v-form v-if="currentProject">
            <v-container>
                <v-layout column wrap>
                    <v-flex subheader three-line>
                        <v-subheader>Dane podstawowe</v-subheader>
                        <v-text-field
                                v-model="currentProject.budget"
                                label="Budżet projektu"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.surface"
                                label="Powierzchnia metry kwadratowe"
                                :readonly="isReadonly()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex subheader
                            three-line>
                        <v-subheader>Adres inwestycji</v-subheader>
                        <v-text-field
                                v-model="currentProject.location.streetName"
                                label="Ulica"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.location.number"
                                label="Numer mieszkania"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.location.postalCode"
                                label="Kod pocztowy"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.location.city"
                                label="Miasto"
                                :readonly="isReadonly()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex subheader
                            three-line>
                        <v-subheader>Dane inwestora</v-subheader>
                        <v-select
                                label="email"
                                :options="currentProject.investors"
                                v-model="selectedInvestor"
                        ></v-select>
                        <div v-if="selectedInvestor">
                            <v-text-field
                                    v-model="selectedInvestor.name"
                                    label="Imie"
                                    :readonly="isReadonly()"
                            ></v-text-field>
                            <v-text-field
                                    v-model="selectedInvestor.surname"
                                    label="Nazwisko"
                                    :readonly="isReadonly()"
                            ></v-text-field>
                            <v-text-field
                                    v-model="selectedInvestor.phone"
                                    label="Imie"
                                    :readonly="isReadonly()"
                            ></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex>
                        <v-subheader>Kwestionariusz</v-subheader>
                        <v-select
                                label="email"
                                :options="templates"
                                v-model="name"
                        ></v-select>
                    </v-flex>
                    <v-flex v-if="currentUser.roles.includes('ARCHITECT')">
                        <v-btn type="submit" color="success">
                            Aktualizuj
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    import PageTitle from '~/components/Common/PageTitle';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'ProjectDetails',
        data: () => ({
            selectedInvestor: null,
        }),
        components: {
            PageTitle,
        },
        computed: {
            ...mapState('projects', ['currentProject']),
            ...mapState('user', ['currentUser']),
            ...mapState('questionnaire', ['templates']),
        },
        methods: {
            ...mapActions('projects', ['updateDetails']),
            submit() {

            },
            isReadonly() {
                if (this.currentUser) {
                    return !this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
    };
</script>