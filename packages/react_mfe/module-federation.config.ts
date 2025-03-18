import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'react_mfe',

  exposes: {
    './Module': './src/remote-entry.ts',
  },

  ...baseConfig,
};

export default config;
