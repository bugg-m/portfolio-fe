import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: ['react_mfe'],
};

export default config;
