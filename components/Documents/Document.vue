<template>
    <v-flex>
        <v-hover>
            <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    width="344"
            >
                <v-img
                        :src="document.url"
                ></v-img>
                <v-card-title>
                    <div>
                        <span class="font-weight-light grey--text title mb-2">{{document.name}}</span>
                    </div>
                </v-card-title>
            </v-card>
        </v-hover>
    </v-flex>
</template>
<script>
    import {mapState} from 'vuex';


    export default {
        name: 'Document',
        props: {
            document: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState('projects', ['projects']),
            ...mapState('user', ['currentUser']),
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
    };
</script>