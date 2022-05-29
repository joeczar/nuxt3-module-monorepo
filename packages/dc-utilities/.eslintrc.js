module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["../../.eslintrc.js"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    noImplicitAny: 0,
    "no-console": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  ignorePatterns: ["lib/*.js", "dist/*.js"],
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/*.?(x)spec.{j,t}s?(x)"],
      env: {
        jest: true // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ["jest"],
      rules: {
        "no-console": 0,
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    },
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": [
          "warn",
          {
            allowDirectConstAssertionInArrowFunctions: true
          }
        ]
      }
    }
  ]
};
