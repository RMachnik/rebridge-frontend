<template>
    <v-flex xs4>
        <v-hover>
            <v-card
                    flat
                    tile
                    class="d-flex"
                    slot-scope="{ hover }"
                    :hover="true"
                    height="100%"
                    max-width="100%"

            >
                <display-as-pdf
                        v-if="document.name.includes('.pdf')"
                        @click.native="show = true"
                        :document="document">
                    <v-expand-transition>
                        <div
                                v-if="hover"
                                class="font-weight-light white--text title mb-2"
                        >
                            {{document.name}}
                        </div>
                    </v-expand-transition>
                </display-as-pdf>
                <v-img
                        aspect-ratio="1"
                        v-else
                        @click="show = true"
                        :src="document.url"
                >
                    <v-expand-transition>
                        <div
                                v-if="hover"
                                class="font-weight-light white--text title mb-2"
                        >
                            {{document.name}}
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-card>
        </v-hover>
        <v-dialog v-model="show" width="600px">
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