<template>
    <v-flex>
        <v-card
                hover="true"
                max-width="344"
        >
            <v-img aspect-ratio="1.6"
                   :src="document.url"
            ></v-img>
            <v-card-title>
                <span class="font-weight-light grey--text title mb-2">{{document.name}}</span>
            </v-card-title>
        </v-card>
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