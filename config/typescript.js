module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/stylistic-type-checked',
    'canonical/typescript',
    'canonical/typescript-type-checking',
  ],
  parserOptions: {
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  rules: {
    // 'canonical/no-unused-exports': 'error',
    'canonical/prefer-inline-type-import': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'local', args: 'none' },
    ],
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      files: '*.d.ts',
      rules: {
        'no-var': 'off',
      },
    },
  ],
};
