<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar v-if="!$route.meta.hideNavbar" />
    
    <main class="flex-1">
      <router-view />
    </main>
    
    <Footer v-if="!$route.meta.hideFooter" />
  </div>
</template>

<style scoped>
  
</style>