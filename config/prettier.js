const prettierOptions = {
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'all',
  bracketSameLine: true,
};

const spaceBeforeParenConfig = [
  'error',
  {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  },
];

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],

  rules: {
    'space-before-function-paren': spaceBeforeParenConfig,
    'prettier/prettier': ['error', prettierOptions],
  },

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['prettier/@typescript-eslint'],
      rules: {
        '@typescript-eslint/space-before-function-paren':
          spaceBeforeParenConfig,
      },
    },
  ],
};
