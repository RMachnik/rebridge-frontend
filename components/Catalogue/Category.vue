<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>
                Flizy - płytki
                <v-btn flat color="red" @click="remove">
                    <v-icon>delete</v-icon>
                </v-btn>
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
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.name" label="Nazwa"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.calories" label="Wymiary"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.protein" label="Link"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.fat" label="Ilosc m^2"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.carbs" label="Cena/m^2/szt"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-data-table
                :headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.sizing }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.quantity }}</td>
                <td class="text-xs-right">{{ props.item.prize }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.comments }}</td>
                <td class="text-xs-right">{{ props.item.accepted }}</td>
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
                            @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        component: 'Category',
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Nazwa',
                    sortable: true,
                    value: 'name'
                },
                {text: 'Wymiary', value: 'sizing', sortable: false},
                {text: 'Link', value: 'url', sortable: false},
                {text: 'Ilość m^2', value: 'quantity'},
                {text: 'Cena m^2/szt', value: 'prize'},
                {text: 'Wartość (zł)', value: 'cost', sortable: true},
                {text: 'Uwagi', value: 'comments', sortable: false},
                {text: 'Akceptacja', value: 'accepted', sortable: false}
            ],
            items: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                sizing: '',
                url: '',
                quantity: 0,
                prize: 0,
                cost: 0,
                comments: '',
                accepted: false
            },
            defaultItem: {
                name: '',
                sizing: '',
                url: '',
                quantity: 0,
                prize: 0,
                cost: 0,
                comments: '',
                accepted: false
            }
        }),
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },
        watch: {
            dialog(val) {
                val || this.close()
            }
        },
        created() {
            this.initialize()
        },
        methods: {
            initialize() {
                this.items = [
                    {
                        name: 'Blanko matte KA1/AD',
                        sizing: '30x30',
                        url: 'http://blanko.mate.com',
                        quantity: 1,
                        prize: 114,
                        cost: 114,
                        comments: 'Piekna',
                        accepted: false
                    },
                    {
                        name: 'White ultra elegant',
                        sizing: '30x30',
                        url: 'http://ultra.elegant.mate.com',
                        quantity: 1,
                        prize: 123,
                        cost: 123,
                        comments: 'Piekna',
                        accepted: false
                    }
                ]
            },
            editItem(item) {
                this.editedIndex = this.items.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteItem(item) {
                const index = this.items.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
                    Object.assign(this.items[this.editedIndex], this.editedItem)
                } else {
                    this.items.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>