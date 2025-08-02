<template>
    <nav class="relative z-10 flex items-center justify-between bg-white px-6 py-4 shadow-lg md:px-10">
        <RouterLink to="/"
            class="flex items-center gap-2 text-3xl font-extrabold text-indigo-600 hover:text-indigo-800 transition duration-300">
            <ShoppingBagIcon class="w-8 h-8 text-indigo-600" />
            MyStore
        </RouterLink>


        <ul class="hidden md:flex gap-8">
            <li>
                <RouterLink to="/" class="text-gray-700 hover:text-indigo-600 font-medium transition duration-200">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/about" class="text-gray-700 hover:text-indigo-600 font-medium transition duration-200">
                    About
                </RouterLink>
            </li>
        </ul>

        <RouterLink to="/cart"
            class="relative flex items-center gap-1 text-gray-700 hover:text-indigo-600 font-medium transition duration-200"
            aria-label="View cart">
            <ShoppingCartIcon class="w-7 h-7" />

            <span v-if="cartCount > 0"
                class="absolute -top-2 -right-2 bg-indigo-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce"
                role="status" aria-label="Items in cart">
                {{ cartCount }}
            </span>

            <span v-else
                class="absolute -top-1 -right-1 bg-gray-300 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
            </span>
        </RouterLink>
    </nav>
</template>
  
  
<script setup>
  import { useProductStore } from '@/stores/productStore';
  import { computed } from 'vue';

  import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
  import { ShoppingBagIcon } from '@heroicons/vue/24/outline';

  const store = useProductStore();
  const cartCount = computed(() => store.cart.length);
</script>

<style>

</style>