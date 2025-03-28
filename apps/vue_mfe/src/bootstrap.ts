import { App, createApp } from 'vue';

import '@styles';

import VueLayout from './router/vue-layout.vue';
import router from './router/vue-route';

const mountVueApp = (container: HTMLDivElement | string): App | null => {
  if (!container) return null;
  const app = createApp(VueLayout);
  app.use(router);

  app.mount(container);
  return app;
};

export { mountVueApp };
