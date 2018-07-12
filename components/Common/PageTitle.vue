<template>
    <v-flex xs12 class="item pl-2">
        <h2 class="headline font-weight-medium"> {{ title }} </h2>
    </v-flex>
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
        text-align: center;
    }
</style>
