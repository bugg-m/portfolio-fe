import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: ['react_mfe'],

  ...baseConfig,
};

export default config;
