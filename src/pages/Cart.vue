<template>
    <div v-if="store.loading" class="text-center text-lg text-gray-500 p-8">Loading...</div>
    <div v-else-if="store.error" class="text-center text-red-500 p-8">{{ store.error }}</div>
    <div v-else class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-indigo-700 mb-8">Shopping Cart</h1>
  
      <div v-if="store.cart.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">🛒</div>
        <p class="text-xl text-gray-600 mb-6">Your cart is empty</p>
        <RouterLink 
          to="/" 
          class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
        >
          Continue Shopping
        </RouterLink>
      </div>
  
      <div v-else class="space-y-6">
        <div 
          v-for="item in store.cart" 
          :key="item.id" 
          class="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 items-start md:items-center"
        >
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-20 h-20 object-contain bg-gray-50 rounded-lg flex-shrink-0"
          />
          
          <div class="flex-1 space-y-2">
            <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.category }}</p>
            <p class="text-lg font-bold text-indigo-600">${{ item.price.toFixed(2) }}</p>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <label for="quantity" class="text-sm text-gray-600">Qty:</label>
              <input 
                type="number" 
                v-model.number="item.quantity" 
                min="1" 
                @change="updateQuantity(item.id, item.quantity)"
                class="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <button 
              @click="remove(item.id)"
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
  
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div class="flex justify-between items-center text-lg">
            <span class="font-medium text-gray-700">Total Items:</span>
            <span class="font-semibold">{{ store.cartCount }}</span>
          </div>
          <div class="flex justify-between items-center text-xl">
            <span class="font-medium text-gray-700">Total Price:</span>
            <span class="font-bold text-indigo-600">${{ store.cartTotal.toFixed(2) }}</span>
          </div>
          
          <div class="flex gap-4 pt-4">
            <button 
              @click="clearCart"
              class="flex-1 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-semibold"
            >
              Clear Cart
            </button>
            <button 
              class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
    import { useProductStore } from '@/stores/productStore';
    import { RouterLink } from 'vue-router';

    const store = useProductStore();

    function remove(id) {
        store.removeFromCart(id);
    }
    
    function clearCart() {
        store.clearCart();
    }
    
    function updateQuantity(id, quantity) {
        if (quantity < 1) return;
        store.updateQuantity(id, quantity);
    }
</script>