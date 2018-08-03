<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <v-btn
                    slot="activator"
                    color="red lighten-2"
                    dark
            >
                {{investor.email}}
            </v-btn>
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
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ContactDetails',
        props: {
            investor: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                dialog: false,
            };
        },
    };
</script>