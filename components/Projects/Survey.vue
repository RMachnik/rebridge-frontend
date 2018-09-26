<template>
    <v-card id="survey">
        <v-card-title><h3>Ankieta</h3></v-card-title>
        <v-list v-for="(question,index) in this.questions" :question="question" :key="index" two-line>
            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title class="text--primary">{{question.id}}. {{question.question}}</v-list-tile-title>
                    <v-list-tile-sub-title>
                        <div v-if="isArchitect">
                            <div v-if="question.answer">
                                {{question.answer}}
                            </div>
                            <div v-else>
                                ...
                            </div>
                        </div>
                        <div v-else>
                            <v-text-field
                                    auto-grow
                                    label="odpowiedź"
                                    v-model="question.answer"
                                    :readonly="isArchitect"
                                    @change="save"
                            ></v-text-field>
                        </div>
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Survey',
        props: {
            projectId: {type: String, required: true},
        },
        data: () => ({
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
                this.answer(data);
            },
        },
    };
</script>