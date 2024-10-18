<template>
    <div>
        <h2>Cap Nhat</h2>
        <FormMovie/>
    </div>
</template>

<script>
import FormMovie from '@/components/FormMovie.vue';

export default {
    components: {
        FormMovie
    },

    computed: {
        id() {
            return this.$route.params.id;
        }
    }
}


</script>

<style lang="scss" scoped>

</style>