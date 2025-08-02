<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <router-link
        to="/"
        class="bg-gray-700 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition"
      >
        Go Home
      </router-link>
    </div>
</template>
  
<script>
  export default {
    name: "NotFound",
  }
</script>