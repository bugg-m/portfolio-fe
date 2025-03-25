export default {
  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '19.0.0',
      },
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '19.0.0',
      },
    },
    {
      libraryName: 'react-router-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '6.29.0',
      },
    },
  ],
};
