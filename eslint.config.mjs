// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },

  // Regras recomendadas JS e TS
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
  },

  {
    rules: {
      // 👍 Regras equilibradas
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'off', // Nest usa muito "any"
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Melhor DX para Nest
      '@typescript-eslint/no-inferrable-types': 'off',

      // Erros reais, não chatices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-var': 'error',
      'prefer-const': 'warn',

      // Prettier sempre como última regra
      'prettier/prettier': 'error',
    },
  },
);
