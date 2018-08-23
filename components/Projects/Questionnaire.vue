<template>
    <v-form @submit.prevent="submit">
        <v-card>
            <v-card-title><h3>Kwestionariusz</h3>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-slide-y-transition>
                <v-card-text v-show="show">
                    <question-item v-for="(question,index) in this.questions" :question="question" :key="index"/>
                    <v-card-actions v-if="!isArchitect">
                        <v-btn
                                color="success"
                                @click.native="dialog = false"
                                @click="save()">
                            Zapisz
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-slide-y-transition>
        </v-card>
    </v-form>

</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import QuestionItem from './QuestionItem';

    export default {
        components: {QuestionItem},
        component: {QuestionItem},
        name: 'Questionnaire',
        props: {
            projectId: {type: String, required: true},
        },
        data: () => ({
            dialog: false,
            show: false
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            ...mapState('projects', ['questions']),
            isArchitect: function () {
                return this.currentUser.roles.includes('ARCHITECT');
            }
        },
        methods: {
            ...mapActions('projects', ['loadDetails', 'delete', 'answer']),
            save() {
                let data = {projectId: this.projectId, token: this.token, data: {answers: this.questions}};
                this.answer(data).then(() => this.dialog = false);
            },
        },
    };
</script>