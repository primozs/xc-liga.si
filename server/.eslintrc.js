module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // 'eslint:recommended',
    // 'prettier',
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint'
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', 'jest', '@typescript-eslint'],
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true
    }
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    },
    react: {
      version: 'detect'
    }
  },
  globals: {
    describe: true,
    it: true,
    xit: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
    window: true,
    document: true,
    cy: true
  },
  rules: {
    // overrides
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    camelcase: 'off',
    indent: 'off',
    'jsx-a11y/no-autofocus': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0, // should be removed after universal and node is resolved
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-use-before-define': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    // end overrides
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'none',
        singleQuote: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ],
    'no-console': 1,
    'linebreak-style': [1, 'unix'],
    semi: [1, 'always'],
    'accessor-pairs': 1,
    'arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [1, 'always'],
    'brace-style': [
      1,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-dangle': [1, 'never'],
    'comma-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [1, 'last'],
    'constructor-super': 1,
    curly: [1, 'multi-line'],
    'dot-location': [1, 'property'],
    'eol-last': 1,
    eqeqeq: [1, 'allow-null'],
    'generator-star-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [1, '^(err|error)$'],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'new-cap': [
      1,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 1,
    'no-array-constructor': 1,
    'no-caller': 1,
    'no-class-assign': 1,
    'no-cond-assign': 1,
    'no-const-assign': 1,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-delete-var': 1,
    'no-dupe-args': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'no-empty-character-class': 1,
    'no-labels': 1,
    'no-eval': 1,
    'no-ex-assign': 1,
    'no-extend-native': 1,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': [1, 'functions'],
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-func-assign': 1,
    'no-implied-eval': 1,
    'no-inner-declarations': [1, 'functions'],
    'no-invalid-regexp': 1,
    'no-irregular-whitespace': 1,
    'no-iterator': 1,
    'no-label-var': 1,
    'no-lone-blocks': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-multiple-empty-lines': [
      1,
      {
        max: 1
      }
    ],
    'no-native-reassign': 1,
    'no-negated-in-lhs': 1,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 1,
    'no-new-require': 1,
    'no-new-wrappers': 1,
    'no-obj-calls': 1,
    'no-octal': 1,
    'no-octal-escape': 1,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-regex-spaces': 1,
    'no-return-assign': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-shadow-restricted-names': 1,
    'no-spaced-func': 1,
    'no-sparse-arrays': 1,
    'no-this-before-super': 1,
    'no-throw-literal': 1,
    'no-trailing-spaces': 1,
    'no-undef': 1,
    'no-undef-init': 1,
    'no-unexpected-multiline': 1,
    'no-unneeded-ternary': [
      1,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 1,
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-call': 1,
    'no-with': 1,
    'one-var': [
      1,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      1,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [1, 'never'],
    quotes: [1, 'single', 'avoid-escape'],
    radix: 1,
    'semi-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
    'keyword-spacing': 1,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': 0,
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      1,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'use-isnan': 1,
    'valid-typeof': 1,
    'wrap-iife': [1, 'any'],
    yoda: [1, 'never'],
    'no-case-declarations': [0],
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'no-unused-vars': 0
  }
};
