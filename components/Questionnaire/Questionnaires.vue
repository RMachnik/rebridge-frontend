<template>
    <v-expansion-panel>
        <v-expansion-panel-content
                v-for="(template,i) in templates"
                :key="i"
                expand-icon="mdi-menu-down"
        >
            <div slot="header">{{template.name}}
            </div>

            <v-card>
                <v-card-text class="grey lighten-3">
                    <div v-for="(question,index) in template.questions" :question="question" :key="index">
                        {{index +1}}. {{question}}
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="remove(template)">
                        <v-icon small>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>
<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Questionnaires',
        components: {},
        computed: {
            ...mapState('questionnaire', ['templates']),
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('questionnaire', ['delete']),
            remove(template) {
                let data = {token: this.token, questionnaireTemplateId: template.id}
                this.delete(data)
            }
        }
    };
</script>
