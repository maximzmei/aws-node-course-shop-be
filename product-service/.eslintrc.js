module.exports = {
  parser: "babel-eslint",
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
  },
  extends: "eslint:recommended",
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    semi: ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "exports": "always-multiline",
    }],
    "object-curly-spacing": ["error", "always"],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
}
