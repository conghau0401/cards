<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    const cards = ref([]);

    const fetchCards = async () => {
      try {
        const response = await axios.get('https://66aa0468613eced4eba734ec.mockapi.io/api/v1/cards');
        cards.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
        await fetchCards()
    })
</script>

<template>
    <section class="cards">
        <h2 class="cards__breadcrumb">Photo Cards</h2>
        <div class="cards__container">
            <div v-for="(card, index) in cards" :key="index" class="card__item">
                <div class="card__img">
                    <img :src="card.image" :alt="card.title">
                </div>
                <h3 class="card__title">
                    {{ card.title }}
                </h3>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .cards {
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 0 15px;
        }
        &__item {
            
        }
    }
</style>