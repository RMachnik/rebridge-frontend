<template>
    <section class="container">
        <page-title title="Profile"/>
        <profile/>
    </section>
</template>
<script>
    import PageTitle from '~/components/Common/PageTitle'
    import Profile from '~/components/User/Profile'

    export default {
        name:"IndexProfile",
        components: {
            PageTitle, Profile
        },
    }
</script>