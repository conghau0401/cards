<script setup>
    import { ref } from 'vue'

    defineProps({
        msg: String,
    })

    const count = ref(0)
</script>

<template>
    <section id="cards">
        Photo cards
    </section>
</template>
<style scoped lang="scss">

</style>