module.exports = {
  env: { node: true, es6: true },
  plugins: ['canonical'],
  extends: ['./config/main', './config/import', './config/prettier'],
};
