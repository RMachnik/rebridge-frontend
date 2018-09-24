<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>
                <h5>{{category.name}}
                    <v-btn flat color="red" @click="deleteCat">
                        <v-icon small>delete</v-icon>
                    </v-btn>
                </h5>

            </v-toolbar-title>
            <v-divider
                    class="mx-2"
                    inset
                    vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
                <v-card>
                    <v-card-title>
                        <span class="headline">Dodaj element</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.description" label="Nazwa"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.sizing" label="Wymiary"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.quantity" label="Ilosc m^2"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.prize" label="Cena/m^2/szt"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-data-table
                :headers="headers"
                :items="category.items"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.description }}</td>
                <td>{{ props.item.sizing }}</td>
                <td>{{ props.item.url }}</td>
                <td>{{ props.item.quantity }}</td>
                <td>{{ props.item.prize }}</td>
                <td>{{ props.item.cost }}</td>
                <td>{{ props.item.additionalInfo }}</td>
                <td>{{ props.item.approved }}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteRow(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        component: 'Category',
        props: {
            roomId: {
                type: String,
                required: true
            },
            category: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Nazwa',
                    sortable: true,
                    value: 'description'
                },
                {text: 'Wymiary', value: 'sizing', sortable: false},
                {text: 'Link', value: 'url', sortable: false},
                {text: 'Ilość m^2', value: 'quantity'},
                {text: 'Cena m^2/szt', value: 'prize'},
                {text: 'Wartość (zł)', value: 'cost', sortable: true},
                {text: 'Uwagi', value: 'additionalInfo', sortable: false},
                {text: 'Akceptacja', value: 'approved', sortable: false},
                {text: '', sortable: false}
            ],
            editedIndex: -1,
            editedItem: {
                description: '',
                sizing: '',
                url: '',
                quantity: 0,
                prize: 0,
                cost: 0,
                additionalInfo: '',
                approved: false
            },
            defaultItem: {
                description: '',
                sizing: '',
                url: '',
                quantity: 0,
                prize: 0,
                cost: 0,
                additionalInfo: '',
                approved: false
            }
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('catalogue', ['catalogue']),
            ...mapState('projects', ['selectedProjectDetails']),
        },
        methods: {
            ...mapActions('catalogue', ['addItem', 'deleteItem', 'deleteCategory']),
            deleteCat() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    roomId: this.roomId,
                    categoryId: this.category.id,
                }
                this.deleteCategory(data);
            },
            editItem(item) {
                this.editedIndex = this.category.items.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteRow(item) {
                this.category.items.indexOf(item)
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    roomId: this.roomId,
                    categoryId: this.category.id,
                    itemId: item.id
                }
                this.deleteItem(data);
            },
            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.category.items[this.editedIndex], this.editedItem)
                } else {
                    this.category.items.push(this.editedItem)
                }
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    catalogueId: this.catalogue.id,
                    roomId: this.roomId,
                    categoryId: this.category.id,
                    data: this.editedItem
                }
                this.addItem(data).then(() => this.close());
            }
        },

    }
</script>