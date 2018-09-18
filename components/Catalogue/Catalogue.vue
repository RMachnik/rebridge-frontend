<template>
    <v-card>
        <v-card-title>
            Katalog produktów
            <v-btn color="primary" type="submit">
                Nowy Pokój
            </v-btn>
        </v-card-title>
        <v-card-text>
            <room></room>
            <room></room>
            <room></room>
        </v-card-text>
    </v-card>
</template>

<script>
    import Room from "./Room";

    export default {
        components: {Room},
        component: 'Catalogue'
    }
</script>