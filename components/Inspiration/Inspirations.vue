<template>
    <v-layout>
        <v-flex>
            <subtitle subtitle="Inspiracje"></subtitle>
            <add-inspiration></add-inspiration>
            <v-layout row wrap>
                <inspiration v-for="(inspiration,index) in inspirations" :inspiration="inspiration"
                             :key="index"></inspiration>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import Inspiration from './Inspiration'
    import AddInspiration from './AddInspiration'
    import Subtitle from '../Common/Subtitle'

    export default {
        name: 'Inspirations',
        components: {Subtitle, Inspiration, AddInspiration},
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