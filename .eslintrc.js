module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": 0,
    "prettier/prettier": 1,
    "linebreak-style": ["error", "windows"],
    "react/state-in-constructor": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 1,
    "react/prop-types": 0
  }
};
