import { ModuleFederationConfig } from '@nx/module-federation';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { composePlugins, withNx } from '@nx/rspack';
import { VueLoaderPlugin } from 'vue-loader';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  config => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.module.rules.unshift({
      test: /\.vue$/,
      use: [
        {
          loader: require.resolve('vue-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    });

    config.plugins = config.plugins || [];
    config.plugins.push(new VueLoaderPlugin());
    return config;
  },
  withNx(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  withModuleFederation(config, { dts: false }) as any
);
