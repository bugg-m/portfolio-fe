import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'react_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
