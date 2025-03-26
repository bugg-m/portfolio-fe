/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react_mfe/Module' {
  import { Root } from 'react-dom/client';

  const mountReactApp: (container: HTMLElement) => Root;
  export default mountReactApp;
  export const unmount: (container: HTMLElement) => void;
}

declare module 'next_mfe/Module' {
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module 'vue_mfe/Module' {
  import { App } from 'vue';

  const mountVueApp: (container: HTMLElement) => App<any>;
  export default mountVueApp;
  export const unmount: (container: HTMLElement) => void;
}

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
