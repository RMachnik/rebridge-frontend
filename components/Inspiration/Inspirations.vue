<template>
        <v-flex>
            <v-card>
                <v-card-title><h3>Inspiracje</h3>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </v-card-title>
                <add-inspiration></add-inspiration>
                <v-slide-y-transition>
                    <v-card-text v-show="show">
                        <inspiration v-for="(inspiration,index) in inspirations" :inspiration="inspiration"
                                     :key="index"></inspiration>
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
        </v-flex>
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
        data: () => ({
            show: false
        })
    }
</script>

<style scoped>

</style>