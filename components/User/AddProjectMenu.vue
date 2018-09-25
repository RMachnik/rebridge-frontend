<template>
    <div class="text-xs-center">
        <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
        >
            <v-btn
                    slot="activator"
                    color="indigo"
                    outline
                    dark
            >
                <v-icon>add</v-icon>
            </v-btn>
            <add-project/>
        </v-menu>
    </div>
</template>
<script>
    import AddProject from '~/components/Projects/AddProject'

    export default {
        components: {AddProject},
        data: () => ({
            fav: true,
            menu: false,
            message: false,
            hints: true
        })
    }
</script>