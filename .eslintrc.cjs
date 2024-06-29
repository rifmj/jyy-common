/** @type {import("eslint").Linter.Config} */
const config = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  },
  "plugins": [
    "@typescript-eslint",
    "sonarjs",
    "perfectionist",
    "unicorn",
    "prettier",
    "@stylistic/ts",
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    // "plugin:sonarjs/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": false,
      "printWidth": 80,
      "tabWidth": 2,
      "semi": false,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "arrowParens": "avoid",
      "endOfLine": "auto"
    }],
    "@stylistic/ts/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["export", "type"], next: ["export", "type"] },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "perfectionist/sort-objects": "off",
    "perfectionist/sort-object-types": "off",
    "sonarjs/no-duplicate-string": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ]
  },
}
module.exports = config;
