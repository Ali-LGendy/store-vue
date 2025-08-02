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
      this.cart.push(product);
    },
    removeFromCart(product) {
      const index = this.cart.indexOf(product);
      if (index !== -1) {
        this.cart.splice(index, 1);
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
            this.products[id] = response.data;
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    }
  },
});