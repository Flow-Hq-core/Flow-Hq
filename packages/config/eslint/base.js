/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["dist", ".next", "node_modules"]
};
