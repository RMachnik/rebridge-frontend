<template>
    <form @submit.prevent="submit" novalidate>
        <v-card>
            <v-card-title>
                <v-flex d-flex>
                    <v-text-field
                            label="Email inwestora"
                            v-model="formData.email"
                            required
                            solo
                    >
                    </v-text-field>
                </v-flex>
            </v-card-title>
            <v-card-actions>
                <v-btn color="success" type="submit">
                    Dodaj
                </v-btn>
            </v-card-actions>
        </v-card>
    </form>
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