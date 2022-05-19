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
  rules: {},
  settings: {
    "import/no-unresolved": [2, { ignore: ["^https"] }],
  },
};

module.exports = config;
