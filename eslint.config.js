import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // 1. FICHIERS À IGNORER (Exclusions)
  // On ignore les dépendances, les builds et les fichiers de log
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/coverage/",
      "**/.git/",
      "**/package-lock.json"
    ]
  },

  // 2. CONFIGURATION DE BASE (Recommandée par ESLint)
  pluginJs.configs.recommended,

  // 3. RÈGLES SPÉCIFIQUES & ENVIRONNEMENT
  {
    files: ["**/*.js", "**/*.mjs"], // Cible tous les fichiers JS
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,    // Ajoute les globales Node.js (process, __dirname, etc.)
        ...globals.es2021   // Ajoute les globales ES2021
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      "no-unused-vars": "warn", // Avertissement si variable déclarée mais pas utilisée
      "no-console": "off",      // Autorise les console.log (utile pour tes scripts Bruno)
      "no-undef": "error"       // Erreur si on utilise une variable qui n'existe pas
    }
  }
];