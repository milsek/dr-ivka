import { createRouter, createWebHashHistory } from 'vue-router';
import LandingView from '../views/LandingView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
  ],
});

export default router;
