<template>
    <div>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>{{ comment.content }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ comment.author }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ comment.creationDate }}</v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-divider class="mt-2"></v-divider>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        props: {
            comment: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>
</style>