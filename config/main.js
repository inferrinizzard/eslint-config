module.exports = {
  overrides: [
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
    {
      extends: ['./javascript'],
      files: '*.js',
    },
    {
      extends: ['./typescript'],
      files: '*.ts',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      extends: ['./react'],
      files: ['*.jsx', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      extends: ['./vitest'],
      files: '*.test.{ts,tsx}',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  root: true,
};
