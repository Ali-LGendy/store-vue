<template>
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div v-if="store.loading" class="text-center text-lg text-gray-500">Loading...</div>
      <div v-else-if="store.error" class="text-center text-red-500">{{ store.error }}</div>
  
      <div v-else-if="store.productDetail && store.productDetail.id" class="flex flex-col md:flex-row gap-10 items-start">
        <!-- Product Image -->
        <div class="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
          <img
            :src="store.productDetail.image"
            :alt="store.productDetail.title"
            class="max-h-96 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
  
        <div class="flex-1 space-y-6">
          <span class="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
            {{ store.productDetail.category }}
          </span>

          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            {{ store.productDetail.title }}
          </h1>
  
          <p class="text-gray-600 leading-relaxed text-lg">
            {{ store.productDetail.description }}
          </p>

          <div v-if="store.productDetail.rating" class="flex items-center gap-2">
            <div class="flex items-center">
              <span class="text-yellow-400 text-lg">★</span>
              <span class="font-medium text-gray-700 ml-1">
                {{ store.productDetail.rating.rate }}
              </span>
            </div>
            <span class="text-gray-500 text-sm">
              ({{ store.productDetail.rating.count }} reviews)
            </span>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-3xl font-bold text-indigo-600">
              ${{ store.productDetail.price.toFixed(2) }}
            </p>
          </div>
  
          <div class="flex gap-4">
            <button
              @click="store.addToCart(store.productDetail)"
              class="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
            
            <button
              @click="$router.push('/')"
              class="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { useProductStore } from '@/stores/productStore'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const store = useProductStore()
  const route = useRoute()
  
  onMounted(() => {
    store.fetchProductById(Number(route.params.id))
  })
</script>