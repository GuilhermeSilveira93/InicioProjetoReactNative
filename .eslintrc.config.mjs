import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importHelpers from 'eslint-plugin-import-helpers'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactNative from 'eslint-plugin-react-native'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...compat.extends(
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    '@rocketseat/eslint-config/react',
    ),
    {
        plugins: {
            react,
            'react-native': reactNative,
            '@typescript-eslint': typescriptEslint,
            'react-hooks': reactHooks,
            'import-helpers': importHelpers,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    tsx: true,
                },
            },
        },

        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-useless-constructor': 'off',
            'no-use-before-define': 'off',
            'no-console': 'warn',
            'react/no-unescaped-entities': 'off',
            '@next/next/no-page-custom-font': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react/prop-types': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 1,
            'no-undef': 'off',

            'import-helpers/order-imports': [
                'warn',
                {
                    newlinesBetween: 'always',

                    groups: [
                        ['/^react/', '/^next/', '/^@next/'],
                        '/components/',
                        'module',
                        '/^@shared/',
                        '/absolute/',
                        ['parent', 'sibling', 'index'],
                    ],

                    alphabetize: {
                        order: 'asc',
                        ignoreCase: true,
                    },
                },
            ],
        },
    },
]
