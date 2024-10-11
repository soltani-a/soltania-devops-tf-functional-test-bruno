// eslint.config.js
import { ESLint } from 'eslint';

export default new ESLint({
  baseConfig: {
    parserOptions: {
      ecmaVersion: 2020, // Set ECMAScript version
      sourceType: 'module', // Allow the use of imports
    },
    env: {
      browser: true, // Enable browser global variables
      es2021: true, // Enable ES2021 features
      node: true,   // Enable Node.js global variables
    },
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
    ],
    rules: {
      'no-unused-vars': 'warn', // Warn for unused variables
      'no-console': 'off', // Allow console statements
    },
  },
});
