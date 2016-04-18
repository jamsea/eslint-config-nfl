# eslint-config-nfl

[![npm version](https://badge.fury.io/js/eslint-config-nfl.svg)](http://badge.fury.io/js/eslint-config-nfl)

This package provides NFL's .eslintrc as an extensible shared config. Forked from Airbnb.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-nfl

Our default export contains all of our ESLint rules, including ECMAScript 6+
and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`,
and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-nfl eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "nfl"` to your .eslintrc

### eslint-config-nfl/base

Lints ES6+ but does not lint React. Requires `eslint` and
`eslint-plugin-import`.

1. `npm install --save-dev eslint-config-nfl eslint-plugin-import eslint`
2. add `"extends": "nfl/base"` to your .eslintrc

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
