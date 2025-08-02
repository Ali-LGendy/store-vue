import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ProductDetails from '@/pages/ProductDetails.vue'
import Cart from '@/pages/Cart.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/product/:id', name: 'details', component: ProductDetails},
    { path: '/cart', name: 'cart', component: Cart},
    { path: '/about', name: 'about', component: About},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { hideNavbar: true, hideFooter: true }, },
  ],
})

export default router
