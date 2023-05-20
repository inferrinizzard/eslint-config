module.exports = {
  extends: ['canonical'],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      extends: ['canonical/react', 'canonical/jsx-a11y', 'canonical/typescript'],
      files: '*.tsx',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      extends: ['canonical/jest'],
      files: '*.test.{ts,tsx}',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      extends: ['canonical/json'],
      files: '*.json',
    },
    {
      extends: ['canonical/yaml'],
      files: '*.yaml',
    },
    {
      extends: ['canonical/graphql'],
      files: '*.graphql',
    },
  ],
  root: true,
};
