module.exports = {
	extends: ['plugin:jest/recommended', 'plugin:jest-formatting/strict'],
	rules: {
		'jest/consistent-test-it': 'error',
		'jest/expect-expect': 'error',
		'jest/no-commented-out-tests': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-deprecated-functions': 'error',
		'jest/no-duplicate-hooks': 'error',
		'jest/no-test-callback': 'warn',
		'jest/require-top-level-describe': 'error',
		'jest/valid-title': 'error',
	},
};
