<template>
    <form @submit.prevent="createProject" novalidate>
        <v-flex>
            <v-hover>
                <v-img slot-scope="{ hover }"
                       :class="`elevation-${hover ? 12 : 2}`"
                       class="mx-auto"
                       width="344"
                    src="http://1.bp.blogspot.com/-H10kE2UPTZM/UaG29qWeipI/AAAAAAAAAGk/xs_bvzK0x6o/s1600/DLX-add.png"
                    aspect-ratio="2.75"
                    >
                </v-img>
            </v-hover>
        </v-flex>
    </form>
</template>
<script>

    export default {
        name: 'EmptyProjectTail',
    };
</script>