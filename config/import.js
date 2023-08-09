module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'no-duplicate-imports': 'error',
    'import/first': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
    // "import/newline-after-import": ["error", { count: 2 }],
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'error',
  },
};
