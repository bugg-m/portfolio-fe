import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react_mfe',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
