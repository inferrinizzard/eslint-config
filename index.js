module.exports = {
  env: { node: true, es6: true },
  plugins: ['canonical'],
  extends: [
    './config/canonical',
    './config/javascript',
    './config/typescript',
    './config/react',
    './config/vitest',
    './config/import',
    './config/prettier',
  ],
};
