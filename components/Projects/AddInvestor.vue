<template>
    <v-layout centered justify>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="green" dark>
                Dodaj
            </v-btn>
            <form @submit.prevent="submit" novalidate>
                <v-card>
                    <v-card-title>
                        <span class="headline">Dodaj inwestora</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout column>
                                <v-flex>
                                    <v-text-field label="Email inwestora" v-model="formData.email"
                                                  required></v-text-field>
                                </v-flex>
                                <v-alert
                                        :value="true"
                                        color="error"
                                        icon="warning"
                                        outline
                                        v-if="error">
                                    {{error}}
                                </v-alert>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Zamknij</v-btn>
                        <v-btn color="blue darken-1" flat type="submit">Dodaj</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'AddInvestor',
        props: {
            projectId: {
                type: String,
                required: true,
            },
        },
        data: () => ({
            dialog: false,
            formData: {email: ''},
            error: ''
        }),
        computed: {
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('projects', ['addInvestor']),
            submit() {
                let data = {token: this.token, projectId: this.projectId, data: this.formData};
                this.addInvestor(data).then(
                    () => {
                        this.dialog = false;
                        this.error = ''
                    }).catch(
                    (ex) => {
                        this.error = ex;
                        this.dialog = true;
                    }
                );
            },
        },
    };
</script>