module.exports = {
  plugins: ['vitest'],
  env: {
    'vitest-globals/env': true,
  },
  extends: [
    'plugin:vitest/all',
    'plugin:vitest-globals/recommended',
    'canonical/vitest',
  ],
  rules: {
    'vitest/no-hooks': 'off',
    'vitest/no-skipped-tests': 'off', // fix outdated rule in upstream canonical config
    'vitest/prefer-lowercase-title': 'off',
    'vitest/prefer-to-be': 'off',
    'vitest/prefer-strict-equal': 'off',
    'vitest/require-top-level-describe': 'error',
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
