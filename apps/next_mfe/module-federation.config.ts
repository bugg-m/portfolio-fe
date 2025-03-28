// FIX: This file does nothing, only exists to satisfy nx and rspack.
// This configuration is already configured in next.config.js file

import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'next_mfe',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
