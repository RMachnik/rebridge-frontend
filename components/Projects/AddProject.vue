<template>
        <v-card>
            <form @submit.prevent="submit" novalidate>
                <v-card-title>
                    <v-layout row wrap>
                        <v-flex>
                            <v-text-field label="Nazwa" v-model="formData.name" required></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-select
                                    placeholder="kwestionariusz"
                                    label="name"
                                    :options="templates"
                                    v-model="questionnaireTemplate"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-btn color="success" type="submit">
                                Dodaj
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-title>
            </form>
        </v-card>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import questionnaire from '../../assets/js/api/questionnaire';

    export default {
        name: 'AddProject',
        data: () => ({
            questionnaireTemplate: null,
            formData: {name: '', questionnaireId: ''},
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('questionnaire', ['templates']),
        },
        methods: {
            ...mapActions('projects', ['add']),
            submit() {
                this.formData.questionnaireTemplateId = this.questionnaireTemplate.id;
                let data = {token: this.token, data: this.formData};
                this.add(data);
            }
        },
    };
</script>