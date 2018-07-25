<template>
    <div>
        <v-breadcrumbs>
            <v-icon slot="divider">forward</v-icon>

            <v-breadcrumbs-item
                v-for="item in items"
                :disabled="item.disabled"
                :key="item.text"
            >
                {{ item.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                items: [
                    {
                        text: 'Projekty',
                        disabled: false
                    },
                    {
                        text: 'Link 1',
                        disabled: false
                    },
                ]
            }
        }
    }
</script>
