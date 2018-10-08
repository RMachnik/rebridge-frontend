<template>
    <v-container style="width:1000px;">
        <div v-if="selected">
            <section id="details">
                <project-details :selectedProject="selected"/>
            </section>
        </div>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ProjectDetails from '~/components/Projects/ProjectDetails';
    import EditablePageTitle from "~/components/Common/EditablePageTitle";


    export default {
        components: {
            EditablePageTitle,
            ProjectDetails
        },
        data: () => ({}),
        computed: {
            ...mapGetters('projects', ['find']),
            selected: function () {
                return this.find(this.$route.params.id);
            },
        },
        methods: {
            return() {
                this.$router.go(-1)
            }
        }
    };
</script>