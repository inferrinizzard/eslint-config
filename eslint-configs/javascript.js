module.exports = {
	extends: ['eslint:recommended'],
	rules: {
		'no-console': 'warn',
		'require-atomic-updates': 'error',

		'complexity': ['error', { max: 15 }],
		'no-alert': 'error',
		'no-else-return': 'error',
		'no-param-reassign': 'error',
		'yoda': ['error', 'never', { onlyEquality: true }],
	},
};
