<template>
    <div>
        <v-flex d-flex>
            <v-text-field
                    outline
                    v-model="questionnaire.name"
                    label="Nowy kwestionariusz"
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
        <v-flex>
            <v-btn @click="submit" color="success">
                Dodaj
            </v-btn>
        </v-flex>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex';
    import Subtitle from '~/components/Common/Subtitle'

    export default {
        name: 'AddQuestion',
        components: {Subtitle},
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