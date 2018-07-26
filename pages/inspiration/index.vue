<template>
    <v-layout row wrap>
        <page-title title="Inspiracje" />
        <item v-for="(inspiration, index) in inspirations" :key="index" :dataObject="inspiration"  />
    </v-layout>
</template>

<script>
import PageTitle from '~/components/Common/PageTitle';
import Item from '~/components/Inspiration/Item';
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    components: {
        PageTitle,
        Item
    },
    computed: {
        ...mapState('inspirations', {
            inspirations: state => state.inspirations,
        }),
    },
    fetch ({ store }) {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                store.dispatch('inspirations/setInspirations', res.data)
            })
    }
}
</script>