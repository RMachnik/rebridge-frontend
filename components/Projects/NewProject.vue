<template>
    <v-layout row justify>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="cyan" dark>
                Dodaj
            </v-btn>
            <form @submit.prevent="submit" novalidate>
                <v-card>
                    <v-card-title>
                        <span class="headline">Nowy projekt</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex>
                                    <v-content>Nazwa projektu</v-content>
                                    <v-text-field label="Nazwa" v-model="formData.name" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-content>Szablon kwestionariusza</v-content>
                                    <v-select
                                            label="name"
                                            :options="templates"
                                            v-model="questionnaireTemplate"
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-alert
                                :value="true"
                                color="error"
                                icon="warning"
                                outline
                                v-if="error">
                            {{error}}
                        </v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Zamknij</v-btn>
                        <v-btn color="blue darken-1" flat type="submit">
                            Stwórz
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import questionnaire from '../../assets/js/api/questionnaire';

    export default {
        name: 'NewProject',

        data: () => ({
            dialog: false,
            questionnaireTemplate: null,
            formData: {name: '', questionnaireId: ''},
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['error']),
            ...mapState('questionnaire', ['templates']),
        },
        methods: {
            ...mapActions('projects', ['add']),
            submit() {
                this.formData.questionnaireTemplateId = this.questionnaireTemplate.id;
                let data = {token: this.token, data: this.formData};
                this.add(data);
            },
        },
    };
</script>