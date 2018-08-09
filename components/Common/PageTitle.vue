<template>
    <h2>
        {{ title }}
    </h2>

</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    h2 {
        margin: 0 0 24px;
        text-align: left;
    }
</style>
