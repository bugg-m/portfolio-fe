import { ModuleFederationConfig } from '@nx/module-federation';

import moduleFederationBaseConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'host',

  remotes: [
    ['react_mfe', `react_mfe@${process.env.NX_PUBLIC_REACT_MFE_URL}`],
    ['next_mfe', `next_mfe@${process.env.NX_PUBLIC_NEXT_MFE_URL}`],
    ['vue_mfe', `vue_mfe@${process.env.NX_PUBLIC_VUE_MFE_URL}`],
  ],

  shared: () => {
    return false;
  },

  ...moduleFederationBaseConfig,
};

export default config;
