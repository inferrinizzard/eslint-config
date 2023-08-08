module.exports = {
  env: { node: true, es6: true },
	plugins: ['canonical'],
  extends: [
    "./config/import",
    "./config/javascript",
    "./config/react",
    "./config/typescript",
    "./config/vitest",

    "plugin:json/recommended-with-comments",
  ],
  parserOptions: { tsconfigRootDir: __dirname },
};
