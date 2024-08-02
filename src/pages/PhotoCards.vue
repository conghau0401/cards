<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    import Card from "../components/Card.vue"
    import Loading from "../components/Loading.vue"

    const cards = ref([]);
    const showLoading = ref(true);

    const fetchCards = async () => {
      try {
        const response = await axios.get('https://66aa0468613eced4eba734ec.mockapi.io/api/v1/cards');
        cards.value = response.data;
        showLoading.value = false
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(async () => {
        await fetchCards();
    });
</script>

<template>
    <Loading v-if="showLoading" />
    <section class="cards container">
        <h2 class="cards__breadcrumb">Photo Cards</h2>
        <div class="cards__container">
            <div 
                v-for="(card, index) in cards" 
                :key="index" 
                class="card"
            >
                <Card 
                    :card="card" 
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .cards {
        padding-top: 65px;
        &__container {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
        }
        &__breadcrumb {
            font-size: 25px;
            margin: 20px 0;
            font-weight: bold;
        }
        .card {
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            border-radius: 5px;
            overflow: hidden;
            &__img {
                img {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 3/2;
                    object-fit: cover;
                }
            }
            &__title {
                padding: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
    @media (max-width: 1199px) {
        .cards {
            &__container {
                grid-template-columns: repeat(5, 1fr);
            }
        }
    }
    @media (max-width: 1024px) {
        .cards {
            &__container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
    @media (max-width: 767px) {
        .cards {
            &__container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    @media (max-width: 480px) {
        .cards {
            &__container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
</style>