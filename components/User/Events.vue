<template>
    <v-badge overlap color="primary">
        <span slot="badge">{{this.notRed}}</span>
        <v-menu offset-y>
            <v-avatar slot="activator">
                <v-icon>notifications</v-icon>
            </v-avatar>
            <v-list v-if="events.length > 0">
                <v-list-tile v-for="(event,index) in events" :event="event" :key="index">
                    <v-list-tile-content>
                        <v-list-tile-title class="clickable">
                            <b v-if="!event.seen" @click="markAsRed(event.id)">{{event.message}}</b>
                            <span v-else>{{event.message}}</span>
                        </v-list-tile-title>
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
            ...mapState('auth', ['token']),
            isArchitect: function () {
                return this.currentUser.roles.includes('ARCHITECT');
            },
            notRed: function () {
                return this.events.filter(event => !event.seen).length
            }
        },
        methods: {
            ...mapActions('auth', ['logout']),
            ...mapActions('events', ['markRed']),
            markAsRed(eventId) {
                let data = {
                    token: this.token,
                    eventId: eventId,
                    data: {
                        userId: this.currentUser.id
                    }
                }
                this.markRed(data)
            }

        }
    }
</script>
<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>