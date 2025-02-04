import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from './module-federation.config';

// const react_mfe_url = process.env.NX_REACT_MFE_URL ?? '';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,

  // remotes: [['react_mfe', react_mfe_url]],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false })
);
