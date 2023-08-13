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
    'vitest/prefer-to-be': 'off',
    'vitest/no-skipped-tests': 'off', // fix outdated rule in upstream canonical config
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
