<template>
    <v-layout column wrap>
        <v-flex>
            <div class="display-1">
                <div v-show="editable == false">
                    <label @dblclick="editable = true"> {{title}} </label>
                </div>
                <v-text-field class="display-1" v-show="editable == true" v-model="title"
                              v-on:blur="edit=false; update()"
                              @keyup.enter="edit=false; update()">
                </v-text-field>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'EditablePageTitle',
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data: () => ({
            editable: false,
        }),
        computed: {
            ...mapState('auth', ['token']),
            ...mapState('user', ['currentUser']),
            ...mapState('projects', ['selectedProjectDetails'])
        },
        methods: {
            ...mapActions('projects', ['updateProject']),
            update() {
                let data = {
                    token: this.token,
                    projectId: this.selectedProjectDetails.projectId,
                    data: {name: this.title}
                }
                this.updateProject(data).then(()=>this.editable=false)
            }
        }
    }
</script>