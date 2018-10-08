<template>
    <v-flex>
        <v-expansion-panel>
            <v-expansion-panel-title><h4>Twoje szablony</h4></v-expansion-panel-title>
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
                        <v-btn flat color="red" @click="remove(template)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-flex>
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
