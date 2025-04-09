import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Landing from '../views/Landing.vue';
import CarListing from '../views/CarListing.vue';
import PaymentCalc from '../views/PaymentCalc.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/carlisiting',
      name: 'CarLisiting',
      component: CarListing,
    },
    {
      path: '/paymentcalc',
      name: 'PaymentCalc',
      component: PaymentCalc,
    },
    {
      path: '/located',
      name: 'Located',
      component: () => import('@/views/Located.vue')
    }
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
