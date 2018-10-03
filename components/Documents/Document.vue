<template>
    <v-flex style="padding:10px">
        <v-dialog v-model="show" width="600px">
            <v-card
                    hover="true"
                    slot="activator"
                    class="mx-auto"
                    width="344"
            >
                <v-card-title>
                    <span class="font-weight-light grey--text title mb-2">{{document.name}}</span>
                </v-card-title>
                <display-as-pdf v-if="document.name.includes('.pdf')" :document="document"/>
                <v-img
                        v-else
                        :src="document.url"
                ></v-img>
            </v-card>
            <v-card>
                <v-card-title>
                    <span class="font-weight-light grey--text title mb-2">{{document.name}}</span>
                </v-card-title>
                <document-as-pdf-multiple v-if="document.name.includes('pdf')" :document="document"/>
                <v-img v-else
                       :src="document.url"
                ></v-img>
            </v-card>
        </v-dialog>
    </v-flex>
</template>
<script>
    import {mapState} from 'vuex';
    import DisplayAsPdf from "./DisplayAsPdf";
    import DocumentAsPdfMultiple from "./DocumentAsPdfMultiple";


    export default {
        name: 'Document',
        components: {DisplayAsPdf, DocumentAsPdfMultiple},
        props: {
            document: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            show: false
        }),
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