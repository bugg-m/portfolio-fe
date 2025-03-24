import { App, createApp } from 'vue';

import '@styles';

import AppComponent from './app/App.vue';
import router from './router';

const mountVueApp = (container: HTMLDivElement | string): App | null => {
  if (!container) return null;
  const app = createApp(AppComponent);
  app.use(router);

  app.mount(container);
  return app;
};

export { mountVueApp };
