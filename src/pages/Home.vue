<template>
    <div class="max-w-7xl mx-auto px-2 md:px-4 py-8">
      <h1 class="text-3xl font-bold text-indigo-700 mb-8">Our Products</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="product in store.products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-contain p-2 bg-gray-50"
          />
  
          <div class="p-4 flex-1 flex flex-col">
            <span class="text-xs font-medium bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full self-start mb-2">
              {{ product.category }}
            </span>
  
            <h2 class="text-md font-semibold text-gray-800 mb-1">{{ product.title }}</h2>
  
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              {{ product.description }}
            </p>
  
            <div class="mt-auto">
              <p class="text-lg font-bold text-indigo-600">${{ product.price.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  
  
<script setup>
    import { useProductStore } from '@/stores/productStore';
    import { onMounted } from 'vue'

    const store = useProductStore();

    onMounted(() => {
        store.fetchProducts();
    })
</script>

<style>

</style>