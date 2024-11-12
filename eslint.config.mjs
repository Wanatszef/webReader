import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

export default defineConfig([
    {
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        files: ['src/**/*.{ts,tsx,js,jsx}', 'test/**/*.{ts,tsx,js,jsx}'], // Apply to both source and test files
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            prettier: prettierPlugin,
            'unused-imports': unusedImportsPlugin,
        },
        rules: {
            // indent: ['error', 4],            // Ustawienie wcięcia na 4 spacje
    		'prettier/prettier': ['warn', {  // Użycie spacji zamiast tabów w Prettierze
        	'tabWidth': 4,
        	'useTabs': false,
        	'endOfLine': 'auto'
    		}],

            /***********************************/
            // Unused imports config begin
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
    		'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^(_|transaction)',
				},
			],


            'no-extra-boolean-cast': 'error',
            'prefer-spread': 'error',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            'comma-dangle': ['error', 'always-multiline'],
            'eol-last': 'error',
            'func-call-spacing': ['error', 'never'],
            'guard-for-in': 'error',
            'no-case-declarations': 'error',
            semi: ['error', 'always'],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],

            'no-restricted-globals': [
                'error',
                'context',
                'describe',
                'it',
                'before',
                'beforeEach',
                'after',
                'afterEach',
            ],
            '@typescript-eslint/no-namespace': [
                'error',
                {
                    allowDeclarations: true,
                    allowDefinitionFiles: true,
                },
            ],
            'prefer-rest-params': 'error',
            'no-prototype-builtins': 'error',
            // Hard rules end
            /***********************************/

            /***********************************/
            // Overruled rules begin
            '@typescript-eslint/no-inferrable-types': 'off', // overkill even as a warning
            '@typescript-eslint/no-empty-interface': 'off', // overkill even as a warning
            '@typescript-eslint/no-explicit-any': 'off', // unrealistic to get rid of all anys, keeping so many warnings is not useful
            'no-constant-condition': 'off', // overkill even as a warning
            '@typescript-eslint/ban-ts-comment': 'off', // overkill even as a warning
            // Overruled rules end
            /***********************************/
        },
    },
    {
        // This block applies to files in the "test" directory
        files: ['test/**/*.{ts,tsx,js,jsx}'],
        rules: {
            'no-restricted-globals': ['off'],
        },
    },
]);
