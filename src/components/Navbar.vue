<template>
    <nav class="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <RouterLink to="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
        MyStore
      </RouterLink>
  
      <ul class="flex gap-6">
        <li>
          <RouterLink to="/" class="text-gray-700 hover:text-indigo-600 font-medium transition">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="text-gray-700 hover:text-indigo-600 font-medium transition">
            About
          </RouterLink>
        </li>
      </ul>
  
      <RouterLink to="/cart" class="flex items-center gap-1 text-gray-700 hover:text-indigo-600 font-medium transition">
        <ShoppingCartIcon class="w-7 h-7" />
      </RouterLink>
    </nav>
</template>
  
<script setup>
  import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>

<style>

</style>