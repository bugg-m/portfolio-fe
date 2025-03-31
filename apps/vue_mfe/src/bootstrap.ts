import { App, createApp } from 'vue';

import '@styles';

import VueLayout from './routes/vue-layout.vue';
import router from './routes/vue-route';

const mountVueApp = (container: HTMLDivElement | string): App | null => {
  if (!container) return null;
  const app = createApp(VueLayout);
  app.use(router);

  app.mount(container);
  return app;
};

export { mountVueApp };
