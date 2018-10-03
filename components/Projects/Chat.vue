<template>
    <v-flex>
        <subtitle subtitle="Czat"></subtitle>
        <div class="scrollable">
            <v-list subheader>
                <v-list-tile v-for="(message,index) in chat.messages" :message="message" :key="index" class="clickable">
                    <div v-if="message.author===currentUser.email">
                        <v-list-tile-content>
                            <v-tooltip bottom>
                                <span>{{message.creationDate}}</span>
                                <v-list-tile-title slot="activator">
                                    <span>{{message.content}}</span>
                                </v-list-tile-title>
                            </v-tooltip>
                        </v-list-tile-content>
                    </div>
                    <div v-else>
                        <v-list-tile-avatar>
                            <v-chip small>{{message.author.split("@")[0]}}</v-chip>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-content class="text-xs-left">
                                <v-tooltip bottom>
                                    <span>{{message.creationDate}}</span>
                                    <v-list-tile-title slot="activator">{{message.content}}</v-list-tile-title>
                                </v-tooltip>
                            </v-list-tile-content>
                        </v-list-tile-content>
                    </div>
                </v-list-tile>
            </v-list>
        </div>
        <v-flex>
            <v-text-field
                    outline
                    clearable
                    label="Wiadomość"
                    type="text"
                    v-model="newMessage"
                    @keydown.enter="sendMessage"
            >
                <v-fade-transition slot="append">
                    <v-icon
                            v-if="newMessage"
                            @click="sendMessage"
                    >
                        add_circle
                    </v-icon>
                </v-fade-transition>
            </v-text-field>
        </v-flex>
    </v-flex>
</template>

<script>

    import {mapActions, mapState} from 'vuex'
    import Subtitle from "../Common/Subtitle"

    export default {
        name: 'Chat',
        components: {Subtitle},
        props: {},
        data: () => ({
            newMessage: '',
        }),

        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['chat']),
            ...mapState('user', ['currentUser']),
        },
        methods: {
            ...mapActions('projects', ['sendChatMessage']),
            sendMessage() {
                let data = {
                    token: this.token,
                    projectId: this.chat.projectId,
                    data: {
                        content: this.newMessage
                    }
                }
                this.sendChatMessage(data).then(() => {
                    this.newMessage = ''
                })
            }
        }
    };
</script>
<style scoped>
    .clickable:hover {
        background: rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }
</style>