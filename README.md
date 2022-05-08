[![Node.js Package](https://github.com/mugoagency/eslint-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/mugoagency/eslint-config/actions/workflows/npm-publish.yml)
# eslint-config

Mugo's shareable svgo config for use across projects.

## Installation 

Install `@mugo-agency/eslint-config`:

**With Yarn**
```
yarn add --dev stylelint @mugo-agency/eslint-config
```

**With npm**
```
npm install stylelint @mugo-agency/eslint-config --save-dev
```

## Usage
Mugo's ESLint config comes bundled in `@mugo-agency/eslint-config`. 
Add to your `.eslintrc.js`

```
const config = require("@mugo-agency/eslint-config");
module.exports = config;
```