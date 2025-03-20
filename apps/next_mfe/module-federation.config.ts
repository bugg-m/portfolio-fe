import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'next_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
