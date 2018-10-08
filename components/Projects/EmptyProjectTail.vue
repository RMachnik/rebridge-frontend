<template>
    <v-flex>
        <v-card
                :hover=hover
                max-width="344"
        >
            <v-img
                    src="http://1.bp.blogspot.com/-H10kE2UPTZM/UaG29qWeipI/AAAAAAAAAGk/xs_bvzK0x6o/s1600/DLX-add.png"
                    aspect-ratio="1.6"
            >
            </v-img>
        </v-card>
    </v-flex>
</template>
<script>

    export default {
        name: 'EmptyProjectTail',
        data: () => ({
            hover: true,
        })
    };
</script>