/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleFederationConfig } from '@nx/module-federation';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { composePlugins, withNx, withReact } from '@nx/rspack';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,

  remotes: [
    ['react_mfe', `react_mfe@${process.env.NX_PUBLIC_REACT_MFE_URL}`],
    ['next_mfe', `next_mfe@${process.env.NX_PUBLIC_NEXT_MFE_URL}`],
    ['vue_mfe', `vue_mfe@${process.env.NX_PUBLIC_VUE_MFE_URL}`],
  ],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false }) as any
);
