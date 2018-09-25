<template>
    <v-select
            placeholder="Kwestionariusz"
            label="name"
            :options="templates"
            v-model="questionnaireTemplate"
    ></v-select>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'QuestionnaireSelector',
        data: () => ({
            questionnaireTemplate: null,
        }),
        computed: {
            ...mapState('questionnaire', ['templates']),
        },
    };
</script>