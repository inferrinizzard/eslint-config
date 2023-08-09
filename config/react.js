module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'canonical/react',
  ],
  rules: {
    'react/no-did-mount-set-state': 'error',
    'react/jsx-curly-brace-presence': ['error', { children: 'always' }],
  },
};
