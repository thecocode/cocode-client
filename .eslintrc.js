module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'no-await-in-loop': 'error',
    'no-use-before-define': 'error',
    camelcase: 'error',
    'arrow-body-style': 'error',
    'default-param-last': 'warn',
    'default-case-last': 'error',
    'default-case': 'warn',
    eqeqeq: 'error',
    'func-style': ['error', 'declaration'],
    'no-console': 'error',
    'no-inline-comments': 'warn',
    'no-nested-ternary': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'warn',
    'react/no-array-index-key': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
