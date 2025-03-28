import { ModuleFederationConfig } from '@nx/module-federation';

import moduleFederationBaseConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: ['react_mfe', 'next_mfe', 'vue_mfe'],

  shared: () => {
    return false;
  },

  ...moduleFederationBaseConfig,
};

export default config;
