<template>
    <v-app>
        <Menu/>
        <v-container>
            <nuxt/>
        </v-container>
        <snackbar/>
        <Footer/>
    </v-app>
</template>

<script>
    import Menu from "~/components/Navigation/Menu";
    import Footer from "~/components/Footer/Footer";
    import Snackbar from "~/components/Common/Snackbar";

    export default {
        components: {Menu, Footer, Snackbar},
        middleware: ['initAuth']
    }
</script>

<style>
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }
</style>
