<template>
    <v-layout row justify-center>
        <v-btn color="green" dark @click.stop="dialog = true">Pokaż</v-btn>
        <v-dialog v-model="dialog" width="600px">
            <v-card tile>
                <v-toolbar card dark color="cyan">
                    <v-btn icon dark @click.native="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Kwestionariusz</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                v-if="!currentUser.roles.includes('ARCHITECT')"
                                dark flat
                                @click.native="dialog = false"
                                @click="save()">
                            Zapisz
                        </v-btn>
                        <v-btn
                                v-if="currentUser.roles.includes('ARCHITECT')"
                                dark flat
                                @click.native="dialog = false"
                                @click="dialog = false">
                            Zamknij
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <question-item v-for="(question,index) in this.questions" :question="question" :key="index"/>
                    </v-form>
                </v-card-text>
                <div style="flex: 1 1 auto;"></div>
            </v-card>
        </v-dialog>
    </v-layout>
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
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            ...mapState('projects', ['questions']),
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

<style scoped>

</style>