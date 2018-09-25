<template>
    <div>
        <v-card>
            <v-card-title>
                <h3>Czat</h3>
            </v-card-title>
            <v-card-text class="scrollable">
                <v-list v-for="(message,index) in chat.messages" :message="message" :key="index">
                    <v-list-tile v-if="message.author===currentUser.email">
                        <v-list-tile-content right>
                            <v-list-tile-sub-title>
                                {{message.creationDate}}
                            </v-list-tile-sub-title>
                            {{message.content}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile
                            v-else
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
            <v-card-text>
                <v-flex>
                    <v-text-field
                            solo
                            v-model="newMessage"
                            label="Nowa wiadomość"
                            placeholder="Nowa wiadomość"
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
            </v-card-text>
        </v-card>
    </div>
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
    .scrollable {
        overflow-y: scroll;
        max-height: 250px;
    }
</style>