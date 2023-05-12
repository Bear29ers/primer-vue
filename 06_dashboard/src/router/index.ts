import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Order from '../pages/Order.vue';
import Product from '../pages/Product.vue';
import Profile from '../pages/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
