import { defineStore } from "pinia";
import axios from 'axios';

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    cart: [],
    productDetail: null,
    loading: false,
    error: null,
  }),

  getters: {
    cartCount: (state) => {
      return state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    },
    cartTotal: (state) => {
      return state.cart.reduce((acc, item) => {
        const quantity = item.quantity || 1;
        const price = parseFloat(item.price) || 0;
        return acc + (price * quantity);
      }, 0);
    },
  },

  actions: {
    addToCart(product) {
        const existing = this.cart.find((item) => item.id === product.id)
        if (existing) {
          existing.quantity = (existing.quantity || 1) + 1
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
        if (item && quantity > 0) {
            item.quantity = parseInt(quantity) || 1
        }
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
            this.productDetail = response.data;
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    }
  },
});