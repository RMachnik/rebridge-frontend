<template>
    <v-flex>
        <v-chip @dblclick="remove" close="true" @input="remove">
            {{investor.email}}
        </v-chip>
        <div class="v-subheader" v-if="investor.name">{{investor.name}} {{investor.surname}}</div>
        <div class="v-subheader" v-if="investor.phone"> {{investor.phone}}</div>
    </v-flex>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'ContactDetails',
        props: {
            investor: {
                type: Object,
                required: true,
            },
        },
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['selectedProjectDetails']),
            hasData: function () {
                return this.investor.surname || this.investor.phone || this.investor.name;
            }
        },
        methods: {
            ...mapActions('projects', ['removeInvestor']),
            remove() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    email: this.investor.email
                };
                this.removeInvestor(data)
            }
        }
    };
</script>