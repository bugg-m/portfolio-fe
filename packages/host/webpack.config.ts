import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false }),

  (config) => {
    if (config.mode === 'development') {
      config.optimization ??= {};
      config.optimization.runtimeChunk = 'single';
    }
    config.module?.rules?.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/pdf/[name].[hash][ext][query]',
      },
    });
    return config;
  }
);
