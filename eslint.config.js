import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

const config = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    globals: globals.node,
  },
  plugins: {
    "@typescript-eslint": ts,
    import: importPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...ts.configs["recommended-type-checked"].rules,
    ...importPlugin.configs.recommended.rules,
    "no-console": ["error"],
    "arrow-parens": ["error", "always"],
    "curly": ["error", "all"],
    "quotes": ["error", "double"],
    "object-shorthand": ["error"],
    "prefer-destructuring": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "import/no-duplicates": ["error"],
    "import/newline-after-import": ["error"],
  },
  ignores: ["dist", "build", "node_modules"],
};

export default config;
