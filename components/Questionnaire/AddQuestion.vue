<template>
    <v-form>
        <v-card>
            <v-card-title>Stwórz nowy szablon</v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-text-field
                                v-model="questionnaire.name"
                                label="Nazwa szablonu"
                        ></v-text-field>
                        <v-btn color="success" @click="addQuestion">
                            <v-icon>add</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(question,index) in questionnaire.questions" :question="question"
                          :key="index">
                    <v-flex d-flex>
                        <v-text-field
                                v-model="questionnaire.questions[index]"
                                label="Pytanie"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-flex d-flex>
                    <v-btn @click="submit()" color="success">
                        Dodaj
                    </v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'AddQuestion',
        data: () => ({
            questionnaire: {
                name: '',
                questions: []
            },
        }),

        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
        },
        methods: {
            ...mapActions('questionnaire', ['add']),
            submit() {
                let data = {
                    token: this.token,
                    data: this.questionnaire
                };
                console.log(this.questionnaire)
                this.add(data).then(
                    () => {
                        this.questionnaire.name = ''
                        this.questionnaire.questions = []
                    }
                )
            },
            addQuestion() {
                this.questionnaire.questions.push('')
            }
        }
    };
</script>