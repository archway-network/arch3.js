module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: false,
    node: true,
    worker: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    // tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:jsdoc/recommended-typescript',
  ],
  settings: {
    node: {
      tryExtensions: ['.ts', '.d.ts', '.js', '.json'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: true
    }
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'indent': ['error', 2],
    'array-callback-return': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true
    }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'block-scoped-var': 'error',
    'camelcase': 'error',
    'comma-spacing': 'error',
    'complexity': ['error', {
      max: 8
    }],
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'curly': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    'implicit-arrow-linebreak': 'error',
    'generator-star-spacing': 'error',
    'linebreak-style': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': ['error', {
      functions: false,
      classes: false
    }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'require-atomic-updates': 'error',
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'semi-style': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'yield-star-spacing': 'error',
    'node/exports-style': ['error', 'exports'],
    'node/file-extension-in-import': ['error', 'never'],
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'warn',
    'node/prefer-promises/fs': 'warn',
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'variable',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['const', 'exported'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/parameter-properties': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'pathGroups': [
        {
          'pattern': '@archwayhq/**',
          'group': 'external',
          'position': 'after'
        }
      ],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      }
    }],
    'jsdoc/require-jsdoc': ['warn', { 'publicOnly': true }],
    'jsdoc/tag-lines': ['warn', 'any', { 'startLines': 1 }],
  },
  overrides: [
    {
      files: '*.cjs',
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'node/exports-style': 'off',
      },
    },
    {
      files: '**/?(*.)+(spec|test).[tj]s?(x)',
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
      rules: {
        'jest/consistent-test-it': 'error',
        'jest/no-conditional-in-test': 'warn',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'warn',
        'jest/require-top-level-describe': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      }
    },
  ],
};
