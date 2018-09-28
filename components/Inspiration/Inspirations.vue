<template>
    <v-card>
        <v-card-title>
            <h3>Inspiracje</h3>
        </v-card-title>
        <v-card-text>
            <v-layout row wrap>
                <add-inspiration></add-inspiration>
                <inspiration v-for="(inspiration,index) in inspirations" :inspiration="inspiration"
                             :key="index"></inspiration>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    import Inspiration from './Inspiration'
    import AddInspiration from './AddInspiration'

    export default {
        name: 'Inspirations',
        components: {Inspiration, AddInspiration},
        props: {
            inspirations: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>