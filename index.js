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
  plugins: ["sort-keys-fix"],
  rules: {
    "sort-keys": [
      "error",
      "asc",
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
  settings: {
    "import/no-unresolved": [2, { ignore: ["^https"] }],
  },
};

module.exports = config;
