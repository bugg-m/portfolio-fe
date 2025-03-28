import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'vue_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
