<template>
    <v-card>
        <v-card-title>
            <h3>Czat</h3>
        </v-card-title>
        <v-card-text class="scrollable">
            <v-list v-for="(message,index) in chat.messages" :message="message" :key="index">
                <v-list-tile
                        avatar
                >
                    <v-list-tile-avatar>
                        <v-chip small>{{message.author.split("@")[0]}}</v-chip>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>
                            {{message.creationDate}}
                        </v-list-tile-sub-title>
                        {{message.content}}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>
        </v-card-text>
        <v-card-actions>
                <v-flex d-flex>
                        <textarea
                                solo
                                auto-grow
                                v-model="newMessage"
                                label="Wiadomość"
                                placeholder="Wiadomość"
                        >
                        </textarea>
                </v-flex>
                <v-flex>
                    <v-btn small color="success" @click="sendMessage(newMessage)">
                        Wyślij
                    </v-btn>
                </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Chat',
        components: {},
        props: {},
        data: () => ({
            newMessage: '',
        }),

        computed: {
            ...mapState('auth', ['token']),
            ...mapState('projects', ['chat']),
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
    .scrollable {
        overflow-y: scroll;
        height: 330px;
    }
</style>