<template>
    <form @submit.prevent="submit" novalidate>
        <v-card>
            <v-card-text>
                <v-text-field label="Nazwa projektu" v-model="formData.name" required></v-text-field>
                <v-select
                        placeholder="Kwestionariusz"
                        label="name"
                        :options="templates"
                        v-model="questionnaireTemplate"
                ></v-select>
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" type="submit">
                    Dodaj
                </v-btn>
            </v-card-actions>
        </v-card>
    </form>

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
                this.add(data).then(() => this.formData.name = '');
            }
        },
    };
</script>