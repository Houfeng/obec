module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "prettier"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "jsxPragma": "createElement",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "Set": "readonly",
    "Map": "readonly",
    "Promise": "readonly"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/no-unsafe-declaration-merging": 0,
    "prettier/prettier": "error",
    "no-useless-catch": 0,
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "max-depth": [
      "error",
      4
    ],
    "max-statements": [
      "error",
      50
    ],
    "max-params": [
      "error",
      5
    ],
    "max-nested-callbacks": [
      "error",
      4
    ],
    "max-lines-per-function": [
      "error",
      120
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-console": 1,
    "quotes": [
      2,
      "double"
    ]
  }
}