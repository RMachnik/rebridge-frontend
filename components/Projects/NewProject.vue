<template>
    <v-layout row justify>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="cyan" dark>
               Dodaj
            </v-btn>
            <form @submit.prevent="submit" novalidate>
                <v-card>
                    <v-card-title>
                        <span class="headline">Nowy projekt</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Nazwa" v-model="formData.name" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Zamknij</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false" type="submit">Stwórz</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: "NewProject",
        data: () => ({
            dialog: false,
            formData: {name: ''}
        }),
        computed: {
            ...mapState(
                'auth', ['token']
            ),
        },
        methods: {
            ...mapActions('project', ['addProject']),
            submit() {
                var data = {token: this.token, data: this.formData};
                this.addProject(data)
            }
        }
    }
</script>