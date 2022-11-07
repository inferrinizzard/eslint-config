module.exports = {
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['canonical'],
	parserOptions: {
		tsconfigRootDir: './',
		project: ['./tsconfig.json'],
	},
	rules: {
		'canonical/prefer-inline-type-import': 'error',
		'@typescript-eslint/ban-ts-comment': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unused-vars': ['error', { vars: 'local', args: 'none' }],
		'@typescript-eslint/no-use-before-define': 'off',
	},
};
