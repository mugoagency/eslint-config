module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/no-unresolved": [2, { ignore: ["^https"] }],
  },
};
