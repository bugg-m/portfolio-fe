import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: ['react_mfe', 'next_mfe', 'vue_mfe'],
};

export default config;
