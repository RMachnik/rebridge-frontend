<template>
    <v-layout>
        <v-flex>
            <subtitle subtitle="Dokumentacja"></subtitle>
            <add-document v-if="isArchitect"/>
            <v-container grid-list-sm fluid>
                <v-layout row wrap>
                    <document v-for="(document, index) in this.documents" :key="index" :document="document"/>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex';
    import Document from './Document'
    import AddDocument from "./AddDocument";
    import Subtitle from "../Common/Subtitle"

    export default {
        name: 'Documents',
        components: {Subtitle, AddDocument, Document},
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