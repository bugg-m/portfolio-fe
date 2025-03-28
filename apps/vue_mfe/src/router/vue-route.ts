import VueWelcomePage from '@vue_mfe/app/overview/overview.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(process.env.NX_PUBLIC_VUE_MFE_BASE_ROUTE),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueWelcomePage,
    },
  ],
});

export default router;
