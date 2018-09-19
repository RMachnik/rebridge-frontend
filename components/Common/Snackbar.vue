<template>
    <v-card class="v-snack--absolute">
        <v-snackbar v-if="success"
                    :value="success"
                    :color="successColor"
                    :multi-line="mode === 'multi-line'"
                    :timeout="timeout"
                    :vertical="mode === 'vertical'"
        >
            {{ success }}
            <v-btn
                    dark
                    flat
                    @click="close()"
            >
                Zamknij
            </v-btn>
        </v-snackbar>
        <v-snackbar v-if="failure"
                    :value="failure"
                    :color="errorColor"
                    :multi-line="mode === 'multi-line'"
                    :timeout="timeout"
                    :vertical="mode === 'vertical'"
        >
            {{ failure }}
            <v-btn
                    dark
                    flat
                    @click="close()"
            >
                Zamknij
            </v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Snackbar",
        data() {
            return {
                successColor: 'success',
                errorColor: 'error',
                mode: 'multi-line',
                timeout: 6000,
            };
        },
        computed: {
            ...mapState('global', ['success', 'failure'])
        },
        methods: {
            close() {
                this.$store.commit('global/REMOVE_SUCCESS');
                this.$store.commit('global/REMOVE_FAILURE');
                return false;
            }
        }
    };
</script>