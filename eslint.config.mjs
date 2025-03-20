import nx from '@nx/eslint-plugin';
import importSort from 'eslint-plugin-simple-import-sort';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    plugins: {
      'import-sort': importSort,
    },
  },
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'],
            ['^react$', '^react-dom$', '^react', '^@?\\w'],
            ['^@host(/.*|$)'],
            ['^@react_mfe(/.*|$)', '^react_mfe/Module'],
            ['^@api(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
            ['^\\u0000'],
          ],
        },
      ],
      'import-sort/exports': 'error',
    },
  },
];
