<template>
    <v-container fluid grid-list-md>
        <v-card>
            <v-card-title><h3>Documents</h3></v-card-title>
            <add-document v-if="isArchitect"/>
            <v-layout row wrap>
                <document v-for="(document, index) in this.documents" :key="index" :document="document"/>
            </v-layout>
        </v-card>
    </v-container>
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