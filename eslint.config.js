export default [
  {
    ignores: [
      // Ignore all files and directories by default
      "**/*"
    ],
    rules: {
      // Add basic rules if needed
      "no-unused-vars": "warn", // Warn on unused variables
      "no-console": "off"       // Allow console statements
    },
    languageOptions: {
      ecmaVersion: 2021,        // Use ECMAScript 2021
      sourceType: "module"      // Enable ES module support
    },
    linterOptions: {
      reportUnusedDisableDirectives: true  // Report unused eslint-disable directives
    }
  }
];