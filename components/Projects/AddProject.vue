<template>
    <form @submit.prevent="createProject" novalidate>
        <v-flex>
            <v-hover>
                <v-card slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                >
                    <v-card-text>
                        <v-text-field solo label="Nazwa projektu" v-model="formData.name" required></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="success" @click="createProject">
                            Dodaj
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-hover>
        </v-flex>
    </form>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'AddProject',
        data: () => ({
            formData: {name: ''},
        }),
        computed: {
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('projects', ['add']),
            createProject() {
                let data = {token: this.token, data: this.formData};
                this.add(data).then(() => this.formData.name = '');
            }
        },
    };
</script>