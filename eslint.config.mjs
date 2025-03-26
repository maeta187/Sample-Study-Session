import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginNext from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import eslintPluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default defineConfig([
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: compat.extends(
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
      'next/typescript',
      'prettier'
    ),
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@next/next': eslintPluginNext
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'object',
            'index',
            'type'
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc'
          }
        }
      ]
    }
  },
  eslintConfigPrettier
])
