module.exports = {
  plugins: ['vitest'],
  env: {
    'vitest-globals/env': true,
  },
  extends: [
    'plugin:vitest/recommended',
    'plugin:vitest-globals/recommended',
    'canonical/vitest',
  ],
  rules: {
    'vitest/prefer-to-be': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      globals: {
        vi: true,
      },
      rules: {
        'import/first': 'off',
      },
    },
  ],
};
