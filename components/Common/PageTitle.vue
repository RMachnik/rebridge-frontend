<template>
    <div class="display-1 text-uppercase">
        {{ title }}
    </div>
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
