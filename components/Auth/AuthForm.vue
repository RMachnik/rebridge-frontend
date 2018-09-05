<template>
    <v-flex xs12 lg8 offset-lg2 class="item pa-2">
        <form @submit.prevent="submit" novalidate>
            <v-text-field
                    v-validate="'required|email'"
                    v-model="formData.email"
                    :error-messages="errors.collect('email')"
                    label="E-mail"
                    data-vv-name="email"
                    required
            ></v-text-field>
            <v-text-field
                    v-validate="'required'"
                    v-model="formData.password"
                    type="password"
                    :error-messages="errors.collect('password')"
                    label="Hasło"
                    data-vv-name="password"
                    required
            ></v-text-field>
            <v-alert
                    :value="true"
                    color="error"
                    icon="warning"
                    outline
                    v-if="error">
                {{error}}
            </v-alert>
            <v-btn type="submit" color="success">
                wyślij
            </v-btn>
            <v-btn color="error" @click="clear">wyczyść</v-btn>
            <v-btn color="info" @click="toggleLoginFormState">{{ currentButtonTitle }}</v-btn>
        </form>
    </v-flex>
</template>

<script>
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import {mapActions, mapState} from 'vuex';

    Vue.use(VeeValidate);

    export default {
        name: 'AuthForm',
        $_veeValidate: {
            validator: 'new',
        },
        data() {
            return {
                formData: {
                    email: '',
                    password: '',
                },
                error: ''
            };
        },
        computed: {
            ...mapState('auth', [
                'isLoginForm',
                'token'
            ]),
            currentButtonTitle() {
                return this.isLoginForm ? 'Zarejestruj się' : 'Zaloguj się';
            },
        },
        methods: {
            ...mapActions('auth', [
                    'toggleLoginFormState',
                    'register',
                    'login',
                ],
                'user',
                ['loadUser'],
            ),
            redirectToProjects() {
                this.$router.push('/projects');
            }
            ,
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.isLoginForm) {
                            this.logInUser()
                        } else {
                            this.registerUser()
                        }
                    }
                });
            },
            logInUser() {
                this.error = null
                this.login(this.formData).then(
                    () => this.redirectToProjects()
                ).catch(
                    (ex) => this.error = ex
                )
            },
            registerUser() {
                this.error = null
                this.register(this.formData).then(
                    () => this.redirectToProjects()
                ).catch(
                    (ex) => this.error = ex
                )
            },
            clear() {
                Object.keys(this.formData).forEach(key => {
                    this.formData[key] = '';
                });
                this.$validator.reset();
            },
        },
    };
</script>
