<template>
    <div>
        <pdf
                v-for="i in numPages"
                :key="i"
                :src="src"
                :page="i"
        ></pdf>
    </div>
</template>

<script>

    import pdf from 'vue-pdf'

    export default {
        name:"DocumentAsPdfMultiple",
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
                src: pdf.createLoadingTask(this.document.url),
                numPages: undefined,
            }
        },
        mounted() {
            this.src.then(pdf => {
                this.numPages = pdf.numPages;
            })
        }
    }

</script>