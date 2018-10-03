<template>

</template>
<script>
    export default {
        name: "FullSizeInspiration",
        props: {
            inspiration: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            showFullInspiration: false
        })
    }
</script>