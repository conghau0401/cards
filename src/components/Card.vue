<script setup>
    import { defineProps } from "vue";
    const props = defineProps(
        { 
            card: Object 
        }
    )
</script>

<template>
    <div class="card__img">
        <img :src="card.image" :alt="card.title">
    </div>
    <h3 class="card__title">
        {{ card.title }}
    </h3>
</template>
