import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Prettier 会处理这些格式规则，移除与 Prettier 冲突的规则
      // 'quotes' - 由 Prettier 的 singleQuote 处理
      // 'no-trailing-spaces' - 由 Prettier 自动处理
      // 'eol-last' - 由 Prettier 的 endOfLine 处理
      // 'semi' - 由 Prettier 的 semi 处理

      // 允许使用 any
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
