<template>
  <section class="container">
      <h2 class="headline font-weight-medium">{{ currentFormTitle }}</h2>
      <auth-form />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
import AuthForm from "../components/Auth/AuthForm";

export default {
    components: {
        AuthForm,
        AppLogo
    },
    computed: {
        ...mapState('auth', [
            'isLoginForm'
        ]),
        currentFormTitle () {
            return this.isLoginForm ? 'Zaloguj się' : 'Zarejestruj się'
        }
    }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>
