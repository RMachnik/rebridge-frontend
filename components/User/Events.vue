<template>

    <v-badge overlap>
        <span slot="badge">{{events.length}}</span>
        <v-menu offset-y>
            <v-avatar
                    color="cyan red--after"
                    slot="activator"
            >
                <v-icon dark>notifications</v-icon>
            </v-avatar>
            <v-list v-if="events.length > 0">
                <v-list-tile v-for="(event,index) in events" :event="event" :key="index">
                    <v-list-tile-content>
                        <v-list-tile-title>{{event.content}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-badge>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Notifications',
        computed: {
            ...mapState('user', ['currentUser']),
            ...mapState('events', ['events']),
            isArchitect: function () {
                return this.currentUser.roles.includes('ARCHITECT');
            }
        },
        methods: {
            ...mapActions('auth', ['logout']),
        }
    }
</script>
<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>