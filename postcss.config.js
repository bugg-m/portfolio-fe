const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
    'postcss-import': {
      resolve: (id, basedir) => {
        try {
          return require.resolve(id, {
            paths: [basedir, join(__dirname, 'node_modules')],
          });
        } catch (error) {
          console.error('Config error:', error);
          return id;
        }
      },
    },
  },
};
