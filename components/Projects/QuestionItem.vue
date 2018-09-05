<template>
    <v-card>
        <v-card-title><h4>{{question.id}}. {{question.question}}</h4></v-card-title>
        <v-card-text>
            <div v-if="isArchitect">
                <div v-if="question.answer">
                    {{question.answer}}
                </div>
                <div v-else>
                    ...
                </div>
            </div>
            <div v-else>
                <v-textarea
                        solo
                        auto-grow
                        label="odpowiedź"
                        v-model="question.answer"
                        :readonly="isArchitect"
                ></v-textarea>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'QuestionItem',
        props: {
            question: {
                type: Object,
                required: true,
            },
        },
        data: () => ({
            row: 0,
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
    }
</script>

<style scoped>

</style>