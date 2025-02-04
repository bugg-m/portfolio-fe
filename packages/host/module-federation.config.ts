import { ModuleFederationConfig } from '@nx/webpack';

const react_mfe_url = process.env.NX_REACT_MFE_URL ?? '';

const config: ModuleFederationConfig = {
  name: 'host',

  // remotes: ['react_mfe'],
  remotes: [['react_mfe', react_mfe_url]],
};

export default config;
