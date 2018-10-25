<template>
    <div>
        <h3>
            {{ subtitle }}
        </h3>
        <v-divider></v-divider>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
            subtitle: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    h3 {
        text-align: left;
    }
</style>
