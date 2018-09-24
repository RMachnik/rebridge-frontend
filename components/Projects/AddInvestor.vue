<template>
    <form @submit.prevent="addInvestor" novalidate>
        <v-flex d-flex>
            <v-text-field
                    label="Email inwestora"
                    v-model="formData.email"
                    required
                    solo
                    @keydown.enter="add"
            >
                <v-fade-transition slot="append">
                    <v-icon
                            v-if="formData.email"
                            @click="add"
                    >
                        add_circle
                    </v-icon>
                </v-fade-transition>
            </v-text-field>
        </v-flex>
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
            add() {
                let data = {token: this.token, projectId: this.selectedProjectDetails.projectId, data: this.formData};
                this.addInvestor(data).then(() => this.formData.email = null);
            },
        },
    };
</script>