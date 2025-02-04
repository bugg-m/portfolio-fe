import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: ['react_mfe', 'https://bugg-m-react.netlify.app/remoteEntry.js'],
  // remotes: [['react_mfe', 'https://localhost:9001/remoteEntry.js']],
};

export default config;
