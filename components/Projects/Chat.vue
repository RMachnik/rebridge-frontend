<template>
    <v-flex>
        <subtitle subtitle="Czat"></subtitle>
        <v-list two-lines>
            <template v-for="(item,index) in chat.messages">
                <v-list-tile hover="true"
                             :key="item.content"
                             avatar
                >
                    <v-list-tile-avatar v-if="item.author!=currentUser.email">
                        <v-chip small>{{item.author.split("@")[0]}}</v-chip>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-sub-title>{{item.content}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-avatar v-if="item.author===currentUser.email">
                        <v-chip small>{{item.author.split("@")[0]}}</v-chip>
                    </v-list-tile-avatar>
                </v-list-tile>
                <v-divider
                        v-if="index + 1 < chat.messages.length"
                        :key="index"
                ></v-divider>
            </template>
        </v-list>
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