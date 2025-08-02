import { defineStore } from "pinia";
import axios from 'axios';

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    cart: [],
    loading: false,
    error: null,
  }),

  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
    cartTotal: (state) => {
      return state.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },

  actions: {
    addToCart(product) {
        const existing = this.cart.find((item) => item.id === product.id)
        if (existing) {
          existing.quantity++
        } else {
          this.cart.push({ ...product, quantity: 1 })
        }
    },
    removeFromCart(id) {
        this.cart = this.cart.filter((item) => item.id !== id)
    },
    clearCart() {
        this.cart = []
    },
    updateQuantity(id, quantity) {
        const item = this.cart.find((item) => item.id === id)
        if (item) item.quantity = quantity
    },

    async fetchProducts() {
        this.loading = true;
        this.error = null;
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            this.products = response.data;
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    },
    async fetchProductById(id) {
        this.loading = true;
        this.error = null;
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            this.products[id] = response.data;
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    }
  },
});