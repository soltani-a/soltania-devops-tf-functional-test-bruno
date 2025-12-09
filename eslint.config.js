import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // 1. Définition des dossiers à IGNORER (remplace .eslintignore)
  {
    ignores: [
      "node_modules/",
      "dist/",
      "coverage/",
      "reports/",
      "junit.xml",
      "**/*.min.js"
    ]
  },

  // 2. Configuration pour le code Node.js
  {
    files: ["**/*.js"],
    languageOptions: { 
      sourceType: "module", // Car tu as "type": "module" dans package.json
      globals: {
        ...globals.node,
        ...globals.mocha // Ajoute ceci si tu utilises 'describe'/'it' dans tes tests
      } 
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off", // On autorise les logs pour ce projet CLI
    }
  },

  // 3. Règles recommandées par défaut
  pluginJs.configs.recommended,
];