import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'vue_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  library: {
    type: 'global',
    name: 'vue_mfe',
  },
};

export default config;
