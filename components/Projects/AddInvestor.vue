<template>
    <v-flex d-flex>
        <form @submit.prevent="submit" novalidate>
            <v-card>
                <v-card-title>
                    <v-text-field
                            label="Email inwestora"
                            v-model="formData.email"
                            required
                    >
                    </v-text-field>
                </v-card-title>
                <v-card-actions>
                    <v-btn color="success" type="submit">
                        Dodaj
                    </v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </v-flex>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'AddInvestor',
        data: () => ({
            formData: {email: ''},
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails']),
        },
        methods: {
            ...mapActions('projects', ['addInvestor']),
            submit() {
                let data = {token: this.token, projectId: this.selectedProjectDetails.projectId, data: this.formData};
                this.addInvestor(data);
            },
        },
    };
</script>