<template>
    <v-list-tile-content>
        <v-list-tile-title>{{question.id}}. {{question.question}}</v-list-tile-title>
        <v-flex xs6>
            <v-textarea
                    outline
                    name="input-7-4"
                    label="Outline textarea"
                    v-model="question.answer"
            ></v-textarea>
        </v-flex>
    </v-list-tile-content>
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
        },
    };
</script>

<style scoped>

</style>