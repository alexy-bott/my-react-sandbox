import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'src/tasks/review/refactor-11-reverse-list/{,starter/}App.tsx',
    // Original interview snippets are deliberately not application code.
    'src/tasks/review/refactor-07-memo-toggle/Refactor07Task.tsx',
    'src/tasks/review/refactor-07-memo-toggle/starter/Refactor07Task.tsx',
    'src/tasks/review/refactor-08-window-event/Refactor08Task.tsx',
    'src/tasks/review/refactor-08-window-event/starter/Refactor08Task.tsx',
    'src/tasks/review/refactor-36-rest-dependencies/Refactor36Task.tsx',
    'src/tasks/review/refactor-36-rest-dependencies/starter/Refactor36Task.tsx',
    'src/tasks/review/refactor-12-counter-variable/Refactor12Task.tsx',
    'src/tasks/review/refactor-12-counter-variable/starter/Refactor12Task.tsx',
    'src/tasks/review/refactor-12-counter-variable/Counter38.tsx',
    'src/tasks/review/refactor-12-counter-variable/starter/Counter38.tsx',
    'src/tasks/review/refactor-34-interval-no-deps/Refactor34Task.tsx',
    'src/tasks/review/refactor-34-interval-no-deps/starter/Refactor34Task.tsx',
    'src/tasks/review/user-search-code-review/UserSearch.tsx',
    'src/tasks/review/user-search-code-review/starter/UserSearch.tsx',
    'src/tasks/review/refactor-09-class-event/Refactor09Task.tsx',
    'src/tasks/review/refactor-09-class-event/starter/Refactor09Task.tsx',
    'src/tasks/review/refactor-10-lazy-init/Refactor10Task.tsx',
    'src/tasks/review/refactor-10-lazy-init/starter/Refactor10Task.tsx',
    'src/tasks/review/refactor-10-lazy-init/LazyInit23.tsx',
    'src/tasks/review/refactor-10-lazy-init/starter/LazyInit23.tsx',
    'src/tasks/review/refactor-21-todo-search/Refactor21Task.tsx',
    'src/tasks/review/refactor-21-todo-search/starter/Refactor21Task.tsx',
    'src/tasks/review/refactor-35-count-display/Refactor35Task.tsx',
    'src/tasks/review/refactor-35-count-display/starter/Refactor35Task.tsx',
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
