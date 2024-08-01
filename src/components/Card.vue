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
    <h3 class="card__title" :title="card.title">
        {{ card.title }}
    </h3>
</template>
