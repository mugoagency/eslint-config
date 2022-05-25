const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "no-multiple-empty-lines": [2, {"max": 1, "maxEOF": 1}],
    "indent": ["error", 2]
  },
  settings: {
    "import/no-unresolved": [2, { ignore: ["^https"] }],
  },
};

module.exports = config;
