"use strict";

// https://github.com/airbnb/javascript

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
var restrictedGlobals = [
  "addEventListener",
  "blur",
  "close",
  "closed",
  "confirm",
  "defaultStatus",
  "defaultstatus",
  "event",
  "external",
  "find",
  "focus",
  "frameElement",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "locationbar",
  "menubar",
  "moveBy",
  "moveTo",
  "name",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onunload",
  "open",
  "opener",
  "opera",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "print",
  "removeEventListener",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollbars",
  "scrollBy",
  "scrollTo",
  "scrollX",
  "scrollY",
  "self",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top"
];

module.exports = {
  root: true,

  parser: "typescript-eslint-parser",

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],

  plugins: ["import", "jsx-a11y", "react", "typescript"],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
    // http://eslint.org/docs/rules/
    "array-callback-return": "warn",
    "block-spacing": "warn",
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "dot-location": ["warn", "property"],
    eqeqeq: ["warn", "allow-null"],
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-cond-assign": ["warn", "always"],
    "no-const-assign": "warn",
    "no-control-regex": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: false
      }
    ],
    "no-multi-str": "warn",
    "no-native-reassign": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-undef": "warn",
    "no-restricted-globals": ["warn"].concat(restrictedGlobals),
    "no-unexpected-multiline": "warn",
    "no-unreachable": "warn",
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "no-use-before-define": [
      "off",
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "warn",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    "no-with": "warn",
    "no-whitespace-before-property": "warn",
    "no-undef": "off",
    "no-console": "warn",
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "\\b[A-Z][a-z]*([A-Z][a-z]*)*\\b"
      }
    ],
    "no-extra-boolean-cast": "warn",
    "no-use-before-define": "off",
    "no-case-declarations": "warn",
    "no-constant-condition": ["warn", { checkLoops: false }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var", "expression"]
      },
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: ["class", "function", "block"], next: "*" }
    ],
    "lines-between-class-members": [
      "warn",
      "always",
      { exceptAfterSingleLine: true }
    ],

    radix: "warn",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    strict: ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "warn",
    "valid-typeof": "warn",
    "no-restricted-properties": [
      "warn",
      // TODO: reenable once import() is no longer slow.
      // https://github.com/facebookincubator/create-react-app/issues/2176
      // {
      //   object: 'require',
      //   property: 'ensure',
      //   message: 'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      // },
      {
        object: "System",
        property: "import",
        message:
          "Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting"
      }
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/first": "warn",
    "import/no-amd": "warn",
    "import/no-webpack-loader-syntax": "warn",

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": "warn",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/require-render-return": "warn",
    "react/style-prop-object": "warn",
    "react/prop-types": "off",
    "react/display-name": "warn",
    "react/jsx-key": "warn",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",

    // https://github.com/nzakas/eslint-plugin-typescript
    "typescript/class-name-casing": "warn",
    "typescript/no-unused-vars": "warn"
  }
};
