/// <reference types='vitest' />
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vue_mfe',
  server: {
    port: 9003,
    host: 'localhost',
  },
  preview: {
    port: 9100,
    host: 'localhost',
  },
  plugins: [
    vue(),
    nxViteTsPaths({ extensions: ['.ts', '.vue'] }),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'vue_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/remote-entry.ts',
      },
      shared: ['vue', 'vue-router', 'pinia'],
    }),
  ],
  build: {
    outDir: '../../dist/apps/vue_mfe',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
}));
