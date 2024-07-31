<script setup>
    import Header from "./components/layout/Header.vue";
    import Footer from "./components/layout/Footer.vue";
    import PhotoCard from "./pages/PhotoCard.vue";
</script>

<template>
    <Header />
    <router-view />
    <Footer />
</template>

<style lang="scss">
    @import "./assets/scss/rest.scss";
    @import "./assets/scss/global.scss";
</style>
