<template>
    <section class="container">
        <page-title title="ProfileDetails"/>
        <div>{{$route.params.id}}</div>
    </section>
</template>

<script>
    import PageTitle from '~/components/Common/PageTitle'

    export default {
        name: "IndexProfile",
        components: {
            PageTitle
        },
    }
</script>