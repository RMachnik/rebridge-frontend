<template>
    <v-flex flex-d>
        <form @submit.prevent="submit" novalidate>
            <v-card>
                <v-card-title>
                    <v-text-field
                            label="Nazwa"
                            v-model="formData.name"
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