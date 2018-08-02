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
                                v-model="currentProject.streetName"
                                label="Ulica"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.number"
                                label="Numer mieszkania"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.postalCode"
                                label="Kod pocztowy"
                                :readonly="isReadonly()"
                        ></v-text-field>
                        <v-text-field
                                v-model="currentProject.city"
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
                                :options="currentProject.investors"
                                v-model="selectedInvestor"
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
        },
        methods: {
            ...mapActions('projects', ['updateDetails']),
            submit() {

            },
            isReadonly() {
                return !this.currentUser.roles.includes('ARCHITECT');
            },
        },
    };
</script>