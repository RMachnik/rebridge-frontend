<template>
    <v-card>
        <v-card-title>
            Czat
        </v-card-title>
        <v-card-text class="scrollable">
            <v-list v-for="(message,index) in chat.messages" :message="message" :key="index">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>
                            {{message.author}}: {{message.creationDate}}
                        </v-list-tile-sub-title>
                        {{message.content}}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-layout row wrap>
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
            </v-layout>
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
        height: 323px;
    }
</style>