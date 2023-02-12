module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:react-hooks/recommended',
    './eslint-config',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'react', 'react-native'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-var': 'error',
  },
};
