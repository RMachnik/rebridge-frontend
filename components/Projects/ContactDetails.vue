<template>
    <v-layout center column>
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <v-chip
                    slot="activator"
                    v-model="investor"
            >
                <v-avatar>
                    <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                </v-avatar>
                {{investor.email}}
            </v-chip>
            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Dane Kontaktowe
                </v-card-title>

                <v-card-text>
                    <div>Imie: {{investor.name}}</div>
                    <div>Nazwisko: {{investor.surname}}</div>
                    <div>Telefon: {{investor.phone}}</div>
                    <div>Email: {{investor.email}}</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >Zamknij
                    </v-btn>
                    <v-btn
                            color="red"
                            flat
                            @click="dialog = false"
                    >Usuń
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'ContactDetails',
        props: {
            investor: {
                type: Object,
                required: true,
            },
            projectId: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                dialog: false,
            };
        },
        computed: {
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('projects', ['removeInvestor']),
            delete() {
                if (this.investorEmail) {
                    let data = {token: this.token, projectId: this.projectId, email: this.investor.email};
                    console.log(this.investorEmail)
                    console.log(data)
                }
            }
        }
    };
</script>