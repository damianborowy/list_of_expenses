module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['simple-import-sort', 'prettier', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/display-name': 'off',
    'react-refresh/only-export-components': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty': 'off',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
};
