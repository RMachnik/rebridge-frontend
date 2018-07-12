<template>
    <v-flex xs12 sm4 class="item pa-2">
        <v-card>
            <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
            ></v-card-media>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ dataObject.title }}</h3>
                    <div>{{ dataObject.body }}</div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            dataObject: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>