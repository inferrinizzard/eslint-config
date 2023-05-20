const spaceBeforeParenConfig = [
  'error',
  {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  },
];

module.exports = {
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
      plugins: ['prettier'],
      rules: {
        'space-before-function-paren': spaceBeforeParenConfig,
        '@typescript-eslint/space-before-function-paren': spaceBeforeParenConfig,
      },
    },
    {
      files: ['**/*.{js,jsx}'],
      extends: ['plugin:prettier/recommended'],
      plugins: ['prettier'],
      rules: {
        'space-before-function-paren': spaceBeforeParenConfig,
      },
    },
  ],
};
