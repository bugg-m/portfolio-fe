import { withModuleFederation } from '@nx/module-federation/rspack';
import { composePlugins, withNx, withReact } from '@nx/rspack';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false })
);
