/**
 * Configuration ESLint avec meilleures pratiques React & TypeScript
 */

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist", "build", "node_modules"],
    rules: {
      // Best Practices
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // Géré par TypeScript
      eqeqeq: ["error", "always"],

      // React
      "react/prop-types": "off", // TypeScript gère ça
      "react/react-in-jsx-scope": "off", // React 17+

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
