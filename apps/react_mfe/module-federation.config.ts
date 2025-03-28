import { ModuleFederationConfig } from '@nx/module-federation';

import moduleFederationBaseConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'react_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },

  shared: () => {
    return false;
  },

  ...moduleFederationBaseConfig,
};

export default config;
