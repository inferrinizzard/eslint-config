module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'canonical/react',
  ],
  rules: {
    'react/forbid-component-props': 'off',
    'react/jsx-curly-brace-presence': ['error', { children: 'always' }],
    'react/no-did-mount-set-state': 'error',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
  },
};
