<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <dev>
    <Navbar v-if="!$route.meta.hideNavbar" />
    <router-view />
    <Footer v-if="!$route.meta.hideFooter" />
  </dev>
</template>

<style scoped>
  
</style>
