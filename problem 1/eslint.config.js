import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import emotion from 'eslint-plugin-emotion' // Add the Emotion plugin

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Consider adding .ts and .tsx for TypeScript support as well
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      emotion, // Add the Emotion plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Emotion-specific rules:
      'emotion/jsx-import': 'warn', // Ensure that @jsxImportSource is used
      'emotion/syntax-preference': ['error', 'styled'], // Enforce 'styled' syntax (optional)
      'emotion/jsx-alignment': ['warn', { object: 'always', props: 'always' }], // Optional: enforce style properties alignment
    },
  },
]
