<template>
    <v-card>
        <v-card-title><h3>Stwórz nowy szablon</h3></v-card-title>
        <v-card-text>
            <v-layout column wrap>
                <v-flex d-flex>
                    <v-text-field
                            solo
                            v-model="questionnaire.name"
                            label="Nazwa szablonu"
                    >
                    </v-text-field>
                </v-flex>
                <v-flex d-flex v-for="(question,index) in questionnaire.questions" :question="question"
                        :key="index">
                    <v-text-field
                            v-model="questionnaire.questions[index]"
                            label="Pytanie"
                            @keydown.enter="addQuestion"
                    >
                    </v-text-field>
                </v-flex>
                <v-icon
                        v-if="questionnaire.name"
                        @click="addQuestion"
                >
                    add_circle
                </v-icon>
            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-flex>
                <v-btn @click="submit" color="success">
                    Zapisz kwestionariusz
                </v-btn>
            </v-flex>
        </v-card-actions>
    </v-card>
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