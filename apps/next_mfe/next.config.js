const { composePlugins, withNx } = require('@nx/next');
const { withModuleFederation } = require('@nx/react/module-federation.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  nx: { svgr: false },
  reactStrictMode: true,
};

const moduleFederationConfig = {
  name: 'next_mfe',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

async function createConfig() {
  const mfePluginResponse = await withModuleFederation(moduleFederationConfig);
  return composePlugins(withNx, mfePluginResponse)(nextConfig);
}

module.exports = createConfig();
