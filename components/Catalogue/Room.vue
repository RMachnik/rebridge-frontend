<template>
    <v-card>
        <v-card-title>
            Łazienka
            <v-btn color="primary" type="submit">
                Nowa kategoria
            </v-btn>
            <v-btn flat color="red" @click="remove">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <category></category>
            <category></category>
            <category></category>
        </v-card-text>
    </v-card>
</template>

<script>

    import Category from "./Category";

    export default {
        components: {Category},
        component: 'Room',
    }
</script>