<template>
    <v-card>
        <v-card-title><h3>Documents</h3></v-card-title>
        <v-card-text>
            <v-layout row wrap>
                <add-document v-if="isArchitect"/>
                <document v-for="(document, index) in this.documents" :key="index" :document="document"/>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex';
    import Document from './Document'
    import AddDocument from "./AddDocument";

    export default {
        name: 'Documents',
        components: {AddDocument, Document},
        computed: {
            ...mapState('documents', ['documents']),
            ...mapState('user', ['currentUser']),
            isArchitect: function () {
                if (this.currentUser) {
                    return this.currentUser.roles.includes('ARCHITECT');
                }
            },
        },
    };
</script>