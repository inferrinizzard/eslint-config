module.exports = {
  env: { node: true, es6: true },
	plugins: ['canonical'],
  extends: [
    "./config/canonical",
    "./config/import",
    "./config/javascript",
    "./config/react",
    "./config/typescript",
    "./config/vitest",
  ],
};
