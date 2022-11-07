module.exports = {
	extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
	rules: {
		'no-duplicate-imports': 2,
		'import/export': 'error',
		'import/first': 'error',
		'import/order': ['error', { 'newlines-between': 'always' }],
		'import/no-absolute-path': 'error',
		'import/no-cycle': 'error',
		'import/no-duplicates': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-useless-path-segments': 'error',
	},
};
