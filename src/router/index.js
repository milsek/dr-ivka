import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@/views/LandingView.vue';
import ContactView from '@/views/ContactView.vue';
import PricingView from '@/views/PricingView.vue';
import ServicesView from '@/views/ServicesView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/o-nama',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/pregledi',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/cjenovnik',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
