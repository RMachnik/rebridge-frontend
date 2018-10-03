<template>
    <div>
        <div class="subheading">
            {{ subtitle }}
        </div>
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
    h2 {
        margin: 0 0 24px;
        text-align: left;
    }
</style>
