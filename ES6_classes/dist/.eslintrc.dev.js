"use strict";

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true
  },
  "extends": ['airbnb-base', 'plugin:jest/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    // Allow missing spaces around operators
    'space-infix-ops': 'off',
    // Allow multiple spaces
    'no-multi-spaces': 'off',
    // Allow magic numbers without spacing
    'no-magic-numbers': 'off'
  },
  overrides: [{
    files: ['*.js'],
    excludedFiles: 'babel.config.js'
  }]
};