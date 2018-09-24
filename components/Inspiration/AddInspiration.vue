<template>
    <v-flex xs12 sm10 md8 lg>
        <form @submit.prevent="submit" novalidate>
            <v-card>
                <v-card-title>
                    <v-layout column wrap>
                        <v-flex>
                            <v-text-field
                                    solo
                                    label="Inspiracja"
                                    v-model="formData.name"
                                    required
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-btn color="success" type="submit">
                                Dodaj
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-title>
            </v-card>
        </form>
    </v-flex>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'AddInspiration',
        data: () => ({
            formData: {
                name: '',
                description: '',
                url: ''
            },
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails']),
        },
        methods: {
            ...mapActions('inspirations', ['add']),
            submit() {
                let data = {token: this.token, projectId: this.selectedProjectDetails.projectId, data: this.formData};
                this.add(data);
            },
        },
    };
</script>