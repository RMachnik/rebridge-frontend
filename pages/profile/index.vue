<template>
    <v-container style="width:1000px;">
        <section id="projects">
            <page-title title="Twoje Dane"/>
            <profile/>
        </section>
    </v-container>
</template>
<script>
    import PageTitle from '~/components/Common/PageTitle'
    import Profile from '~/components/User/Profile'

    export default {
        name: "IndexProfile",
        components: {
            PageTitle, Profile
        },
        async fetch({store}) {
            await store.dispatch('user/loadUser', store.state.auth.token);
        }
    }
</script>