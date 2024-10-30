import globals from "globals";
import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import tseslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';


export default [
  eslint.configs.recommended,
  {files: ["**/*.ts}"]},
  {
    languageOptions: { globals: globals.browser },
      parser: tseslintParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
      },
  }, 
  {plugins: {
    '@typescript-eslint': tseslint,
  }},
  {rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    
    // General rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
  }},
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  eslintConfigPrettier,
];