<template>
    <v-flex>
        <v-card>
            <v-card-title><h3>Inspiracje</h3>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-slide-y-transition>
                <div v-show="show">
                    <add-inspiration></add-inspiration>
                    <v-card-text>
                        <v-layout row wrap>
                            <inspiration v-for="(inspiration,index) in inspirations" :inspiration="inspiration"
                                         :key="index"></inspiration>
                        </v-layout>
                    </v-card-text>
                </div>
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