const coreLibraries = new Set(['react', 'react-dom']);

export default {
  shared: (packageName: string, defaultConfig: any) => {
    if (coreLibraries.has(packageName)) {
      return {
        ...defaultConfig,
        singleton: true,
        requiredVersion: '18.3.1',
      };
    }
    return defaultConfig;
  },
};
