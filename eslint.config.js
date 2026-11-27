import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    // These standalone interview snippets deliberately retain original errors.
    'src/tasks/review/refactor-07-memo-toggle/Refactor07Task.tsx',
    'src/tasks/review/refactor-07-memo-toggle/starter/Refactor07Task.tsx',
    'src/tasks/review/refactor-41-state-mutation/Refactor41Task.tsx',
    'src/tasks/review/refactor-41-state-mutation/starter/Refactor41Task.tsx',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
