<template>
            <v-card>
                <v-card-text>
                    <v-text-field
                            v-model="currentUser.name"
                            :rules="[() => !!currentUser.name || 'To pole jest wymagane']"
                            :error-messages="errorMessages"
                            label="Imie"
                            placeholder="Imie"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="currentUser.surname"
                            :rules="[() => !!currentUser.surname || 'To pole jest wymagane']"
                            :error-messages="errorMessages"
                            label="Nazwisko"
                            placeholder="Nazwisko"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="currentUser.email"
                            :rules="[() => !!currentUser.email || 'To pole jest wymagane']"
                            :error-messages="errorMessages"
                            label="Email"
                            placeholder="zdenio@mail.com"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="currentUser.phone"
                            :rules="[
                            () => !!currentUser.phone || 'To pole jest wymagane',
                            () => !!currentUser.phone && currentUser.phone.length <= 9 || 'Telefon powinien zawierać nie mniej niż 9 cyfr'
                            ]"
                            :error-messages="errorMessages"
                            label="Numer telefonu"
                            placeholder="515788832"
                            counter="9"
                            required
                    ></v-text-field>
                    <v-text-field
                            :rules="[
              () => !!currentUser.address.streetName || 'To pole jest wymagane'            ]"
                            v-model="currentUser.address.streetName"
                            label="Adres"
                            placeholder="Lipińskiego"
                            counter="50"
                            required
                    ></v-text-field>
                    <v-text-field
                            :rules="[() => !!currentUser.address.number || 'To pole jest wymagane']"
                            v-model="currentUser.address.number"
                            label="Numer"
                            placeholder="1A/66"
                            required
                    ></v-text-field>
                    <v-text-field
                            :rules="[() => !!currentUser.address.city || 'To pole jest wymagane']"
                            v-model="currentUser.address.city"
                            label="Miasto"
                            placeholder="Kraków"
                            required
                    ></v-text-field>
                    <v-text-field
                            :rules="[() => !!currentUser.address.postalCode || 'To pole jest wymagane',zipCheck]"
                            :error-messages="zipError"
                            v-model="currentUser.address.postalCode"
                            label="Kod pocztowy"
                            required
                            placeholder="30-349"
                            counter="6"
                    ></v-text-field>
                    <v-alert
                            :value="true"
                            color="error"
                            icon="warning"
                            outline
                            v-if="error">
                        {{error}}
                    </v-alert>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-actions>
                    <v-btn flat @click="back">Anuluj</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="submit">Zapisz</v-btn>
                </v-card-actions>
            </v-card>
</template>


<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Profile',
        data: () => ({
            errorMessages: '',
            zipError: '',
            error: ''
        }),
        computed: {
            ...mapState('user', ['currentUser']),
            ...mapState('auth', ['token']),
        },
        methods: {
            ...mapActions('user', ['update']),
            zipCheck() {
                this.zipError =
                    this.zip && (this.zip.length != 6 || this.zip.split('-').length != 2)
                        ? 'Wprowadz wlasciwy format kodu pocztowego, przykład: 39-310'
                        : '';
                return true;
            },
            submit() {
                let profile = {
                    email: this.currentUser.email,
                    name: this.currentUser.name,
                    surname: this.currentUser.surname,
                    phone: this.currentUser.phone,
                    address: this.currentUser.address,
                };
                let data = {token: this.token, data: profile};
                this.update(data).then(() => {
                        this.$router.go(-1)
                    }
                ).catch(
                    (ex) => this.error = ex
                );
            },
            back(){
                this.$router.go(-1)
            }
        },
    };
</script>