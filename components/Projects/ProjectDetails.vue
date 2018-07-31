<!--{-->
<!--"budget": 10000,-->
<!--"surface": 100,-->
<!--"location": { "number":"1","streetName":"Lipinskiego","postalCode":"39-310","city":"new york"},-->
<!--"surveyTemplateId": "1",-->
<!--"investorEmails": ["zdenek@mail.com"]-->

<!--}-->

<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
            <div></div>
            <v-card ref="form">
                <v-card-text>
                    <v-text-field
                            ref="formData.budget"
                            v-model="formData.budget"
                            :rules="[() => !!formData.budget || 'To pole jest wymagane']"
                            :error-messages="errorMessages"
                            label="Budżet"
                            placeholder="0"
                            required
                    ></v-text-field>
                    <v-text-field
                            ref="formData.surface"
                            v-model="formData.surface"
                            :rules="[() => !!currentUser.surface || 'To pole jest wymagane']"
                            :error-messages="errorMessages"
                            label="Powierznia inwestycji m^2"
                            placeholder="0"
                            required
                    ></v-text-field>
                    <v-text-field
                            ref="formData.address"
                            :rules="[
              () => !!formData.address || 'To pole jest wymagane',
              () => !!formData.address && formData.address.length <= 5 || 'Address powinien zawierać min 5 znaków',
              addressCheck
            ]"
                            v-model="formData.address"
                            label="Adres"
                            placeholder="Lipińskiego 1A/66"
                            counter="50"
                            required
                    ></v-text-field>
                    <v-text-field
                            ref="formData.city"
                            :rules="[() => !!formData.city || 'To pole jest wymagane', addressCheck]"
                            v-model="formData.city"
                            label="Miasto"
                            placeholder="Kraków"
                            required
                    ></v-text-field>
                    <v-text-field
                            ref="formData.zip"
                            :rules="[() => !!formData.zip || 'To pole jest wymagane',zipCheck]"
                            :error-messages="zipError"
                            v-model="formData.zip"
                            label="Kod pocztowy"
                            required
                            placeholder="30-349"
                            counter="6"
                    ></v-text-field>
                    <v-autocomplete
                            ref="formData.country"
                            :rules="[() => !!formData.country || 'To pole jest wymagane']"
                            :items="countries"
                            v-model="formData.country"
                            label="Państwo"
                            placeholder="Wybierz..."
                            required
                    ></v-autocomplete>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-actions>
                    <v-btn flat>Anuluj</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="submit">Zapisz</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
    import {mapState} from 'vuex';
    import VTextField from 'vuetify/src/components/VTextField/VTextField';

    export default {
        name: 'Profile',
        components: {VTextField},
        data: () => ({
            countries: ['Polska', 'Afganistan'],
            errorMessages: '',
            formHasErrors: false,
            zipError: '',
            formData: {
                name: null,
                email: null,
                address: null,
                city: null,
                zip: null,
                country: null,
                phoneNumber: null,

            },
        }),
        computed: {
            ...mapState('user', [
                'currentUser',
            ]),
        },
        watch: {
            name() {
                this.errorMessages = '';
            },
        },
        methods: {
            addressCheck() {
                this.errorMessages = this.address && !this.name
                    ? 'Pole wymagane!'
                    : '';
                return true;
            },
            zipCheck() {
                this.zipError =
                    this.zip && (this.zip.length != 6 || this.zip.split('-').length != 2)
                        ? 'Wprowadz wlasciwy format kodu pocztowego, przykład: 39-310'
                        : '';
                return true;
            },
            submit() {
                this.formHasErrors = false;
                Object.keys(this.formData).forEach(f => {
                    if (!this.formData[f]) this.formHasErrors = true;
                    // this.$refs[f].validate(true)
                });
                console.log(this.currentUser.email);
                console.log(this.formData.name);
            },
        },
    };
</script>