<template>
    <v-flex xs12 sm4 class="item pa-2">
        <v-card>
            <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
            ></v-card-media>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ dataObject.name }}</h3>
                    <div>jeszcze nic</div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange" @click="redirectToProject()">Otwórz</v-btn>
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
        },
        methods: {
            redirectToProject() {
                this.$router.push('/projects/' + this.dataObject.id)
            }
        }
    }
</script>

<style scoped>

</style>