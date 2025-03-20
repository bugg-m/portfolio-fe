import { ModuleFederationConfig } from '@nx/module-federation';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { composePlugins, withNx, withReact } from '@nx/rspack';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false }) as any,
  config => {
    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    });

    return config;
  }
);
