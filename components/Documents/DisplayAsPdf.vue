<template>
    <div>
        <pdf
                :src="document.url"
                @num-pages="pageCount = $event"
                @page-loaded="currentPage = $event"
        ></pdf>
    </div>
</template>

<script>

    import pdf from 'vue-pdf'

    export default {
        name: "DisplayAsPdf",
        components: {
            pdf
        },
        props: {
            document: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                currentPage: 0,
                pageCount: 0,
            }
        }
    }

</script>